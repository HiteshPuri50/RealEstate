import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval, take } from 'rxjs';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  constructor(private payment : PaymentService, private router : Router){}
  transactionId : any;
  id: any;
  countdown: number = 6; // Initial countdown value
  countdownSubscription: Subscription | null = null;
  ngOnInit(){
    console.log('Id',this.payment.transactionID);
    this.transactionId = this.payment.transactionID;
    // Start the countdown
    this.startCountdown();
  }
  startCountdown() {
    const countdown$ = interval(1000).pipe(take(this.countdown + 1));
    this.countdownSubscription = countdown$.subscribe({
      next: (value) => {
        this.countdown = this.countdown - 1;
      },
      complete: () => {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnDestroy() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
}
