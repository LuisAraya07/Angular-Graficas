import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;


  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input() barChartLabels: Label[] = [
    // '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  public barChartType: ChartType = 'bar'
  public barChartLegend = true;

   @Input() barChartData: Chart.ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#7E8F37', hoverBackgroundColor: '#A60037' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  constructor() { }

  ngOnInit(): void {
    this.barChartType = this.horizontal ? 'bar' : 'horizontalBar';
  }

}
