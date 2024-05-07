import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSerieComponent } from './list-serie/list-serie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListSerieComponent],
  exports: [ListSerieComponent]
})
export class SerieModule { }
