import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Feedback {
  message: string, 
  feedbackType: FeedbackType
}

export enum FeedbackType {
  error = 0,
  success = 1
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackMessageService {

  private feedback: Subject<Feedback> = new Subject<Feedback>();

  nextFeedback = this.feedback.asObservable();

  constructor() { }

  giveFeedback(feedback: Feedback) {
    this.feedback.next(feedback);
  }

  reset() {
    this.feedback.next(undefined!);
  }
}
