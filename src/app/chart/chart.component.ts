import { Component, OnInit } from '@angular/core';
import mock from './mock_chart_data';
 
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createMock()
  }

  labels: number[];
  data: number[];
  type: string = 'bar';

  options: object = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
                gridLines: {
                    display:false
                }
              }],
      yAxes: [{
                gridLines: {
                    display:false
                }   
              }]
    },
    title: {
      display: true,
      text: 'Meditation Times'
    }
  }

  private createMock() {
    this.labels = mock.dates;
    this.data = mock.time;
  }

}
