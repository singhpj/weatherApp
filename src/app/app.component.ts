import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherApp';
  currentTemp:number = 20
  // userExist:boolean = false;
  constructor() {
  }
  public get userExist(){
    return localStorage.hasOwnProperty('city') && localStorage.getItem('city') != ''
      && localStorage.hasOwnProperty('lon') && localStorage.getItem('lan') != ''
      && localStorage.hasOwnProperty('lat') && localStorage.getItem('lot') != '';
  }


}
