import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should start a timer', () => {
    const time = 40000

    const input = fixture.debugElement.query(By.css('input'));
    const timeOutput = fixture.debugElement.query(By.css('div')).nativeElement;
    let button = fixture.debugElement.nativeElement.querySelector('button');
    const el = input.nativeElement;
    el.value = time;
    button.click();

    fixture.whenStable().then(() => {
      expect(timeOutput.textContent).toContain('Hours: 11 Minutes: 6 Seconds: 40')
    })

    return setTimeout(2000, () => {
      expect(timeOutput.textContent).toContain('Hours: 11 Minutes: 6 Seconds: 38')
    })
  })
});
