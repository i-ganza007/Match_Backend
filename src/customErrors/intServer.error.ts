import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch() 
export class CustomHttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: number;
    let errorResponse: string | object;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
            if (typeof exceptionResponse === 'object') {
        errorResponse = exceptionResponse;
      } else {
        errorResponse = {
          statusCode: status,
          message: exceptionResponse,
        };
      }
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      errorResponse = {
        statusCode: status,
        message: 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && {
          error: exception instanceof Error ? exception.message : String(exception),
        }),
      };
      
      // Log unexpected errors
    //   console.error('Unhandled exception:', exception);
    }

    response.status(status).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      ...errorResponse,
    });
  }
}
