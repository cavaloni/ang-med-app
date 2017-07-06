import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  constructor() { 
    
  }

  ngOnInit() {
    this.time = this.secondsToTime(0)
    console.log(this.time)
  }

  onKey(event: any) {
    this.seconds = event.target.value;
  }

  private startTimer(): void {
    this.time = this.secondsToTime(this.seconds);
    this.timer = Observable.interval(1000);
    this.timer.subscribe((x) => {
      this.seconds -= 1
      this.time = this.secondsToTime(this.seconds)
    })
  }

  private time: object;
  private seconds: number;
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
