import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Feedback, FeedbackMessageService } from 'src/app/core/services/feedback-message.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback?: Feedback;
  subscription?: Subscription;

  constructor (private feedbackService: FeedbackMessageService) { }
  
  ngOnInit(): void {
    this.feedbackService.nextFeedback.subscribe(feedback => {
      if (!feedback) {
        return;
      }

      if (!!this.feedback) {
        this.feedback = undefined;
        this.subscription?.unsubscribe();
      }
      
      this.feedback = feedback;

      if (!!this.feedback) {
        this.subscription = timer(3000).subscribe(() => {
          this.feedbackService.reset();
          this.feedback = undefined;
        })
      }
    })
  }
}
