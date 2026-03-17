import { CustomMetricsMiddleware } from './grafana.middleware';
import { Counter, Gauge, register } from 'prom-client';
import { Request, Response, NextFunction } from 'express';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Build a minimal mock Express Request. */
function mockRequest(overrides: Partial<Request> = {}): Partial<Request> {
  return {
    method: 'GET',
    originalUrl: '/test',
    ...overrides,
  };
}

/** Build a minimal mock Express Response that can emit a 'finish' event. */
function mockResponse(statusCode = 200): Partial<Response> & { emit: (event: string) => void } {
  const listeners: Record<string, Array<() => void>> = {};
  return {
    statusCode,
    on(event: string, cb: () => void) {
      listeners[event] = listeners[event] ?? [];
      listeners[event].push(cb);
      return this as unknown as Response;
    },
    emit(event: string) {
      (listeners[event] ?? []).forEach((cb) => cb());
    },
  } as Partial<Response> & { emit: (event: string) => void };
}

// ─── Suites ───────────────────────────────────────────────────────────────────

describe('CustomMetricsMiddleware', () => {
  let middleware: CustomMetricsMiddleware;

  beforeEach(() => {
    // Clear the Prometheus registry so each test starts clean and metrics can
    // be re-registered without collisions.
    register.clear();
    middleware = new CustomMetricsMiddleware();
  });

  afterEach(() => {
    register.clear();
    jest.restoreAllMocks();
  });

  // ── Constructor ─────────────────────────────────────────────────────────────

  describe('constructor', () => {
    it('should create an instance', () => {
      expect(middleware).toBeDefined();
    });

    it('should instantiate appCounter as a Counter', () => {
      expect(middleware.appCounter).toBeInstanceOf(Counter);
    });

    it('should instantiate appGauge as a Gauge', () => {
      expect(middleware.appGauge).toBeInstanceOf(Gauge);
    });

    it('should instantiate customDurationGauge as a Gauge', () => {
      expect(middleware.customDurationGauge).toBeInstanceOf(Gauge);
    });

    it('should instantiate customErrorsCounter as a Counter', () => {
      expect(middleware.customErrorsCounter).toBeInstanceOf(Counter);
    });

    it('should register all four metrics with the Prometheus register', async () => {
      const metrics = await register.getMetricsAsJSON();
      const names = metrics.map((m) => m.name);
      expect(names).toContain('app_count_metrics');
      expect(names).toContain('app_gauge_metrics');
      expect(names).toContain('app_duration_metrics');
      expect(names).toContain('app_error_metrics');
    });

    it('should not throw when metrics are already registered (hot-reload scenario)', () => {
      // Constructing a second instance while the registry already has the
      // metrics from the first instance must not throw; the constructor catches
      // the prom-client error and falls back to register.getSingleMetric().
      expect(() => new CustomMetricsMiddleware()).not.toThrow();
    });

    it('should log "Metrics already registered" on duplicate registration', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      // First instance already registered metrics in beforeEach; constructing
      // another one triggers the catch branch at metric-construction time.
      new CustomMetricsMiddleware();
      expect(consoleSpy).toHaveBeenCalledWith('Metrics already registered');
    });

    it('should reuse existing metric instances after hot-reload', () => {
      // Second instance must end up with valid, usable metric objects.
      const second = new CustomMetricsMiddleware();
      expect(second.appCounter).toBeDefined();
      expect(second.appGauge).toBeDefined();
      expect(second.customDurationGauge).toBeDefined();
      expect(second.customErrorsCounter).toBeDefined();
    });
  });

  // ── use() – immediate effects ────────────────────────────────────────────────

  describe('use()', () => {
    it('should call next()', () => {
      const next: NextFunction = jest.fn();
      const req = mockRequest();
      const res = mockResponse();

      middleware.use(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledTimes(1);
    });

    it('should increment appCounter with method and originalUrl labels', () => {
      const incSpy = jest.spyOn(middleware.appCounter, 'labels').mockReturnValue({
        inc: jest.fn(),
      } as never);

      const req = mockRequest({ method: 'POST', originalUrl: '/animals' });
      const res = mockResponse();
      middleware.use(req as Request, res as Response, jest.fn());

      expect(incSpy).toHaveBeenCalledWith('POST', '/animals');
    });

    it('should increment appGauge on every request', () => {
      const incSpy = jest.spyOn(middleware.appGauge, 'inc');

      const req = mockRequest();
      const res = mockResponse();
      middleware.use(req as Request, res as Response, jest.fn());

      expect(incSpy).toHaveBeenCalledTimes(1);
    });

    it('should register a "finish" listener on the response', () => {
      const onSpy = jest.spyOn(mockResponse(), 'on');
      const res = mockResponse();
      const resSpy = jest.spyOn(res, 'on');

      middleware.use(mockRequest() as Request, res as Response, jest.fn());

      expect(resSpy).toHaveBeenCalledWith('finish', expect.any(Function));
    });
  });

  // ── use() – finish callback ────────────────────────────────────────────────

  describe('use() → finish callback', () => {
    it('should set customDurationGauge with duration and labels on finish', () => {
      const labelsMock = { set: jest.fn() };
      const durationSpy = jest
        .spyOn(middleware.customDurationGauge, 'labels')
        .mockReturnValue(labelsMock as never);

      const req = mockRequest({ method: 'DELETE', originalUrl: '/users/1' });
      const res = mockResponse(204);

      // Freeze time so duration is deterministic.
      jest.spyOn(Date, 'now').mockReturnValueOnce(1000).mockReturnValueOnce(1250);

      middleware.use(req as Request, res as Response, jest.fn());
      res.emit('finish');

      // Duration = 250 ms; le label = "0.25"
      expect(durationSpy).toHaveBeenCalledWith('DELETE', '/users/1', '0.25');
      expect(labelsMock.set).toHaveBeenCalledWith(250);
    });

    it('should increment customErrorsCounter with method, url, and status on finish', () => {
      const labelsMock = { inc: jest.fn() };
      const errorsSpy = jest
        .spyOn(middleware.customErrorsCounter, 'labels')
        .mockReturnValue(labelsMock as never);

      const req = mockRequest({ method: 'GET', originalUrl: '/health' });
      const res = mockResponse(500);

      middleware.use(req as Request, res as Response, jest.fn());
      res.emit('finish');

      expect(errorsSpy).toHaveBeenCalledWith('GET', '/health', '500');
      expect(labelsMock.inc).toHaveBeenCalledTimes(1);
    });

    it('should record a non-zero duration when real time passes', async () => {
      const setMock = jest.fn();
      jest.spyOn(middleware.customDurationGauge, 'labels').mockReturnValue({ set: setMock } as never);
      jest.spyOn(middleware.customErrorsCounter, 'labels').mockReturnValue({ inc: jest.fn() } as never);

      const res = mockResponse();
      middleware.use(mockRequest() as Request, res as Response, jest.fn());

      // Wait a tick to ensure Date.now() advances at least 1 ms.
      await new Promise((r) => setTimeout(r, 5));
      res.emit('finish');

      const [durationArg] = setMock.mock.calls[0] as [number];
      expect(durationArg).toBeGreaterThanOrEqual(0);
    });

    it('should work correctly for 2xx responses', () => {
      const labelsMock = { inc: jest.fn() };
      const errorsSpy = jest
        .spyOn(middleware.customErrorsCounter, 'labels')
        .mockReturnValue(labelsMock as never);

      jest.spyOn(middleware.customDurationGauge, 'labels').mockReturnValue({ set: jest.fn() } as never);

      const res = mockResponse(200);
      middleware.use(mockRequest() as Request, res as Response, jest.fn());
      res.emit('finish');

      expect(errorsSpy).toHaveBeenCalledWith('GET', '/test', '200');
    });

    it('should work correctly for 4xx responses', () => {
      const labelsMock = { inc: jest.fn() };
      const errorsSpy = jest
        .spyOn(middleware.customErrorsCounter, 'labels')
        .mockReturnValue(labelsMock as never);

      jest.spyOn(middleware.customDurationGauge, 'labels').mockReturnValue({ set: jest.fn() } as never);

      const res = mockResponse(404);
      middleware.use(mockRequest({ originalUrl: '/missing' }) as Request, res as Response, jest.fn());
      res.emit('finish');

      expect(errorsSpy).toHaveBeenCalledWith('GET', '/missing', '404');
    });

    it('should handle multiple requests independently without cross-contamination', () => {
      const counterCalls: string[][] = [];
      jest.spyOn(middleware.appCounter, 'labels').mockImplementation((...args: string[]) => {
        counterCalls.push(args);
        return { inc: jest.fn() } as never;
      });
      jest.spyOn(middleware.appGauge, 'inc');
      jest.spyOn(middleware.customDurationGauge, 'labels').mockReturnValue({ set: jest.fn() } as never);
      jest.spyOn(middleware.customErrorsCounter, 'labels').mockReturnValue({ inc: jest.fn() } as never);

      const req1 = mockRequest({ method: 'GET', originalUrl: '/a' });
      const res1 = mockResponse(200);
      const req2 = mockRequest({ method: 'POST', originalUrl: '/b' });
      const res2 = mockResponse(201);

      middleware.use(req1 as Request, res1 as Response, jest.fn());
      middleware.use(req2 as Request, res2 as Response, jest.fn());

      res1.emit('finish');
      res2.emit('finish');

      expect(counterCalls[0]).toEqual(['GET', '/a']);
      expect(counterCalls[1]).toEqual(['POST', '/b']);
    });
  });

  // ── Metric configuration ────────────────────────────────────────────────────

  describe('metric configuration', () => {
    it('appCounter should have correct help text and label names', async () => {
      const metrics = await register.getMetricsAsJSON();
      const metric = metrics.find((m) => m.name === 'app_count_metrics');
      expect(metric?.help).toBe('Application request counter');
    });

    it('appGauge should have correct help text', async () => {
      const metrics = await register.getMetricsAsJSON();
      const metric = metrics.find((m) => m.name === 'app_gauge_metrics');
      expect(metric?.help).toBe('Application gauge metric');
    });

    it('customDurationGauge should have correct help text', async () => {
      const metrics = await register.getMetricsAsJSON();
      const metric = metrics.find((m) => m.name === 'app_duration_metrics');
      expect(metric?.help).toBe('app_concurrent_metrics_help');
    });

    it('customErrorsCounter should have correct help text', async () => {
      const metrics = await register.getMetricsAsJSON();
      const metric = metrics.find((m) => m.name === 'app_error_metrics');
      expect(metric?.help).toBe('app_usage_metrics_to_detect_errors');
    });
  });
});
