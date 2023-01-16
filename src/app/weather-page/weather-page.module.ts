import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPageComponent } from './weather-page.component';
import { WebServiceService } from 'src/customs/services/web-service.service';
import { MatDividerModule } from '@angular/material/divider'


@NgModule({
  declarations: [WeatherPageComponent],
  imports: [
    CommonModule,
    MatDividerModule,
  ],
  exports: [WeatherPageComponent],
  providers:[WebServiceService]
})
export class WeatherPageModule { }
