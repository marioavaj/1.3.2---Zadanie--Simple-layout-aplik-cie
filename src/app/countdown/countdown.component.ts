import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountdownService } from '../Services/countdown.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  min: number;
  sec: number;
  private countdownSubscription: any;

  constructor(private countdownService: CountdownService) { }

  ngOnInit(): void {
    this.countdownSubscription = this.countdownService.countdown.subscribe((time: number) => {
       this.transTime(time);
    });
  }

  ngOnDestroy(): void {
    if(this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  private transTime(time:number): void{
    this.min = Math.floor(time/60);
    this.sec = time - (this.min*60);
  }

}
