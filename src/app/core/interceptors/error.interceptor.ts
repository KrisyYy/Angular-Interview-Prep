import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { FeedbackMessageService, FeedbackType } from '../services/feedback-message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private feedbackService: FeedbackMessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "There was an error.";
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        }
        else {
          errorMessage = `There was an error. Status: ${error.status}`;
        }
        this.feedbackService.giveFeedback({ message: errorMessage, feedbackType: FeedbackType.error });
        return throwError(() => error);
      })
    );
  }
}
