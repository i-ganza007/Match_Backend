import { CustomMetricsMiddleware } from './grafana.middleware';
import { Counter, Gauge, Histogram, register } from 'prom-client';
import { Request, Response, NextFunction } from 'express';

function mockRequest(overrides: Partial<Request> = {}): Partial<Request> {
  return {
    method: 'GET',
    originalUrl: '/animals/123',
    ...overrides,
  };
}

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

describe('CustomMetricsMiddleware', () => {
  let middleware: CustomMetricsMiddleware;

  beforeEach(() => {
    register.clear();
    middleware = new CustomMetricsMiddleware();
  });

  afterEach(() => {
    register.clear();
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    it('creates all metric instances', () => {
      expect(middleware.appCounter).toBeInstanceOf(Counter);
      expect(middleware.appGauge).toBeInstanceOf(Gauge);
      expect(middleware.customDurationHistogram).toBeInstanceOf(Histogram);
      expect(middleware.customErrorsCounter).toBeInstanceOf(Counter);
    });

    it('registers all metric names in prom-client register', async () => {
      const metrics = await register.getMetricsAsJSON();
      const names = metrics.map((m) => m.name);

      expect(names).toContain('app_count_metrics');
      expect(names).toContain('app_gauge_metrics');
      expect(names).toContain('app_duration_metrics');
      expect(names).toContain('app_error_metrics');
    });

    it('reuses existing metrics when constructor runs twice', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      expect(() => new CustomMetricsMiddleware()).not.toThrow();
      expect(consoleSpy).toHaveBeenCalledWith('Metrics already registered');
    });
  });

  describe('use()', () => {
    it('calls next()', () => {
      const next: NextFunction = jest.fn();

      middleware.use(mockRequest() as Request, mockResponse() as Response, next);

      expect(next).toHaveBeenCalledTimes(1);
    });

    it('increments in-flight gauge with normalized route labels', () => {
      const gaugeLabelsSpy = jest.spyOn(middleware.appGauge, 'labels').mockReturnValue({
        inc: jest.fn(),
        dec: jest.fn(),
      } as never);

      middleware.use(
        mockRequest({ method: 'PATCH', originalUrl: '/animals/42?verbose=true' }) as Request,
        mockResponse() as Response,
        jest.fn(),
      );

      expect(gaugeLabelsSpy).toHaveBeenCalledWith('PATCH', '/animals/:id');
    });

    it('prefers route template when req.route.path is available', () => {
      const gaugeLabelsSpy = jest.spyOn(middleware.appGauge, 'labels').mockReturnValue({
        inc: jest.fn(),
        dec: jest.fn(),
      } as never);

      middleware.use(
        mockRequest({
          method: 'GET',
          baseUrl: '/animals',
          route: { path: '/:id' } as Request['route'],
          path: '/123',
          originalUrl: '/animals/123',
        }) as Request,
        mockResponse() as Response,
        jest.fn(),
      );

      expect(gaugeLabelsSpy).toHaveBeenCalledWith('GET', '/animals/:id');
    });

    it('normalizes UUIDs in fallback routes', () => {
      const gaugeLabelsSpy = jest.spyOn(middleware.appGauge, 'labels').mockReturnValue({
        inc: jest.fn(),
        dec: jest.fn(),
      } as never);

      middleware.use(
        mockRequest({
          method: 'GET',
          originalUrl: '/breeding/3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }) as Request,
        mockResponse() as Response,
        jest.fn(),
      );

      expect(gaugeLabelsSpy).toHaveBeenCalledWith('GET', '/breeding/:id');
    });
  });

  describe('finish callback behavior', () => {
    it('increments request counter and observes histogram duration with status', () => {
      const counterLabelsSpy = jest.spyOn(middleware.appCounter, 'labels').mockReturnValue({
        inc: jest.fn(),
      } as never);
      const histogramLabelsSpy = jest.spyOn(middleware.customDurationHistogram, 'labels').mockReturnValue({
        observe: jest.fn(),
      } as never);

      const hrSpy = jest
        .spyOn(process.hrtime, 'bigint')
        .mockReturnValueOnce(1_000_000_000n)
        .mockReturnValueOnce(1_250_000_000n);

      const res = mockResponse(201);
      middleware.use(mockRequest({ method: 'POST', originalUrl: '/animals' }) as Request, res as Response, jest.fn());
      res.emit('finish');

      expect(counterLabelsSpy).toHaveBeenCalledWith('POST', '/animals', '201');
      expect(histogramLabelsSpy).toHaveBeenCalledWith('POST', '/animals', '201');
      expect(hrSpy).toHaveBeenCalledTimes(2);
    });

    it('decrements in-flight gauge on finish', () => {
      const labelsMock = { inc: jest.fn(), dec: jest.fn() };
      jest.spyOn(middleware.appGauge, 'labels').mockReturnValue(labelsMock as never);

      const res = mockResponse(200);
      middleware.use(mockRequest({ method: 'GET', originalUrl: '/health' }) as Request, res as Response, jest.fn());
      res.emit('finish');

      expect(labelsMock.inc).toHaveBeenCalledTimes(1);
      expect(labelsMock.dec).toHaveBeenCalledTimes(1);
    });

    it('increments error counter only for status >= 400', () => {
      const errorLabelsSpy = jest.spyOn(middleware.customErrorsCounter, 'labels').mockReturnValue({
        inc: jest.fn(),
      } as never);

      const okRes = mockResponse(200);
      middleware.use(mockRequest({ originalUrl: '/ok' }) as Request, okRes as Response, jest.fn());
      okRes.emit('finish');

      const errRes = mockResponse(500);
      middleware.use(mockRequest({ originalUrl: '/fail' }) as Request, errRes as Response, jest.fn());
      errRes.emit('finish');

      expect(errorLabelsSpy).toHaveBeenCalledTimes(1);
      expect(errorLabelsSpy).toHaveBeenCalledWith('GET', '/fail', '500');
    });
  });

  describe('metric metadata', () => {
    it('exposes expected metric types and help text', async () => {
      const metrics = await register.getMetricsAsJSON();

      const counterMetric = metrics.find((m) => m.name === 'app_count_metrics');
      const gaugeMetric = metrics.find((m) => m.name === 'app_gauge_metrics');
      const durationMetric = metrics.find((m) => m.name === 'app_duration_metrics');
      const errorMetric = metrics.find((m) => m.name === 'app_error_metrics');

      expect(counterMetric?.help).toBe('Total HTTP requests observed by middleware');
      expect(counterMetric?.type).toBe('counter');

      expect(gaugeMetric?.help).toBe('In-flight HTTP requests currently being processed');
      expect(gaugeMetric?.type).toBe('gauge');

      expect(durationMetric?.help).toBe('HTTP request duration in seconds');
      expect(durationMetric?.type).toBe('histogram');

      expect(errorMetric?.help).toBe('Total HTTP error responses (status >= 400)');
      expect(errorMetric?.type).toBe('counter');
    });
  });
});
