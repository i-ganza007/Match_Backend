import { Injectable, NestMiddleware } from "@nestjs/common";
import { Counter, Gauge, register } from 'prom-client';
import {Response,Request,NextFunction} from 'express'

@Injectable()
export class CustomMetricsMiddleware implements NestMiddleware {

  public customDurationGauge: Gauge<string>;
  public customErrorsCounter: Counter<string>;
  public appCounter: Counter<string>;
  public appGauge: Gauge<string>;

  constructor()
  {
    // Creating metrics directly
    this.appCounter = new Counter({
      name: 'app_count_metrics',
      help: 'Application request counter',
      labelNames: ['app_method', 'app_origin'],
    });
    
    this.appGauge = new Gauge({
      name: 'app_gauge_metrics', 
      help: 'Application gauge metric',
      labelNames: ['app_method', 'app_origin'],
    });

    this.customDurationGauge = new Gauge<string>({
      name: 'app_duration_metrics',
      help: 'app_concurrent_metrics_help',
      labelNames: ['app_method', 'app_origin', 'le'],
    });
    
    this.customErrorsCounter = new Counter<string>({
      name: 'app_error_metrics',
      help: 'app_usage_metrics_to_detect_errors',
      labelNames: ['app_method', 'app_origin', 'app_status'],
    });

    // Register metrics with Prometheus
    try {
      register.registerMetric(this.appCounter);
      register.registerMetric(this.appGauge);
      register.registerMetric(this.customDurationGauge);
      register.registerMetric(this.customErrorsCounter);
    } catch (error) {
      // Metrics might already be registered in hot-reload scenarios
      console.log('Metrics already registered');
    }
  }

  use(req: Request, res: Response, next: NextFunction) {
    // Incrementing custom counter and gauge
    this.appCounter.labels(req.method, req.originalUrl).inc();
    this.appGauge.inc();

    // Recording start time for measuring duration
    const startTime = Date.now();

    // Setting up a callback for when the response finishes
    res.on('finish', () => {
      // Calculating the duration and recording it in the custom duration gauge
      const endTime = Date.now();
      const duration = endTime - startTime;
      this.customDurationGauge
        .labels(req.method, req.originalUrl, (duration / 1000).toString())
        .set(duration);

      // Incrementing the custom errors counter based on the response status code
      this.customErrorsCounter.labels(req.method, req.originalUrl, res.statusCode.toString()).inc();
    });

    // Continuing with the middleware chain
    next();
  }
}
