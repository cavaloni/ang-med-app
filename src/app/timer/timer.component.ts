import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  constructor() { 
    
  }

  private message: string;

  ngOnInit() {
    this.time = this.secondsToTime(0)
    console.log(this.time)
  }

  timerDone() {
    this.message = "Timer Completed!"
  }

  private startTimer(): void {
    let seconds = this.inputSeconds
    this.message = '';
    this.time = this.secondsToTime(seconds);
    this.timer = Observable.interval(1000);
    this.timer
    .takeWhile(() => seconds !== 0)
    .subscribe((x) => {
      seconds -= 1
      if (seconds === 0) {
        this.timerDone();
      }
      this.time = this.secondsToTime(seconds)
    })
  }

  private time: object;
  private inputSeconds: number;
  private timer: Observable<number>;

  private secondsToTime(secs: number): object{
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

}
