import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.css']
})
export class ListSerieComponent implements OnInit {
  average: number = 0;
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
      var suma = 0;
      this.series.forEach(serie => {
        suma += serie.seasons;
      });
      this.average = suma / this.series.length;
    });
  }

}
