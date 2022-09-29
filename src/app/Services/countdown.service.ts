import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  countdown = new BehaviorSubject<number>(0);
  time:number = 300;
  private intervalSubscription: any;

  constructor() {
    this.startTimer();
   }

  startTimer(): void {
   this.intervalSubscription = setInterval(()=> {
      this.onTickTimer();
    }, 1000);
  }

  private onTickTimer(): void {
    this.time--;
    if(this.time <= 0) {
      this.stopTimer();
      this.onExpired();
    } else {
      this.countdown.next(this.time);
    }
  }
  
  private onExpired(): void {
      // vas kod co sa ma stat
  //  this.onExpiredSubject.next();
  }

  stopTimer(): void {
    clearInterval(this.intervalSubscription);
    this.countdown.next(0);
  }
}
