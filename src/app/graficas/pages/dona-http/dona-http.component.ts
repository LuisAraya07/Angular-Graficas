import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';


  public colors: Color[] = [
    {
      backgroundColor: [
          '#0075ED',
          '#8727F2' ,
          '#F22927' ,
          '#F22927']
      }
      
  ];
  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {
    
    // this.graficasService.getUsuarioRedesSociales()
    //   .pipe(
    //     delay(2000)
    //   )
    //   .subscribe( data => {
    //       const labels = Object.keys(data);
    //       const valores = Object.values(data);

    //       this.doughnutChartLabels = labels;
    //       this.doughnutChartData.push(valores);
          
    //   });


    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, valores }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(valores);
      });

  }

}
