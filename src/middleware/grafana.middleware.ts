import { Injectable, NestMiddleware } from "@nestjs/common";
import { Counter, Gauge, Histogram, register } from 'prom-client';
import { Response, Request, NextFunction } from 'express';

@Injectable()
export class CustomMetricsMiddleware implements NestMiddleware {

  public customDurationHistogram: Histogram<string>;
  public customErrorsCounter: Counter<string>;
  public appCounter: Counter<string>;
  public appGauge: Gauge<string>;

  constructor() {
    // Wrap metric construction in try-catch so hot-reload scenarios are handled
    // gracefully: prom-client throws at `new Counter/Gauge()` time (not during
    // registerMetric) when a metric name is already in the registry.
    try {
      this.appCounter = new Counter({
        name: 'app_count_metrics',
        help: 'Total HTTP requests observed by middleware',
        labelNames: ['app_method', 'app_route', 'app_status'],
      });

      this.appGauge = new Gauge({
        name: 'app_gauge_metrics',
        help: 'In-flight HTTP requests currently being processed',
        labelNames: ['app_method', 'app_route'],
      });

      this.customDurationHistogram = new Histogram<string>({
        name: 'app_duration_metrics',
        help: 'HTTP request duration in seconds',
        labelNames: ['app_method', 'app_route', 'app_status'],
        buckets: [0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2, 5],
      });

      this.customErrorsCounter = new Counter<string>({
        name: 'app_error_metrics',
        help: 'Total HTTP error responses (status >= 400)',
        labelNames: ['app_method', 'app_route', 'app_status'],
      });
    } catch (error) {
      // Metrics already registered (hot-reload); retrieve existing instances.
      console.log('Metrics already registered');
      this.appCounter = register.getSingleMetric('app_count_metrics') as Counter<string>;
      this.appGauge = register.getSingleMetric('app_gauge_metrics') as Gauge<string>;
      this.customDurationHistogram = register.getSingleMetric('app_duration_metrics') as Histogram<string>;
      this.customErrorsCounter = register.getSingleMetric('app_error_metrics') as Counter<string>;
    }
  }

  private resolveRoute(req: Request): string {
    const routePath = req.route?.path ? String(req.route.path) : (req.path || req.originalUrl || 'unknown');
    const fullPath = `${req.baseUrl || ''}${routePath}`;

    return fullPath
      .split('?')[0]
      .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/gi, ':id')
      .replace(/\/\d+(?=\/|$)/g, '/:id') || 'unknown';
  }

  use(req: Request, res: Response, next: NextFunction) {
    const method = req.method || 'UNKNOWN';
    const route = this.resolveRoute(req);

    // Track active requests during the full request lifecycle.
    this.appGauge.labels(method, route).inc();

    // Record high-resolution start time for accurate latency metrics.
    const startTime = process.hrtime.bigint();

    res.on('finish', () => {
      const status = String(res.statusCode ?? 0);
      const durationSeconds = Number(process.hrtime.bigint() - startTime) / 1_000_000_000;

      this.appCounter.labels(method, route, status).inc();
      this.customDurationHistogram.labels(method, route, status).observe(durationSeconds);

      if ((res.statusCode ?? 0) >= 400) {
        this.customErrorsCounter.labels(method, route, status).inc();
      }

      this.appGauge.labels(method, route).dec();
    });

    next();
  }
}
