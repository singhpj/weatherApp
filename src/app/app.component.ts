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
  constructor(){
    this.checkValues()
  }

  checkValues(){
    // this.userExist = localStorage.hasOwnProperty('userName') && localStorage.getItem('userName') != '';
  }
  get userExist(){
    return localStorage.hasOwnProperty('userName') && localStorage.getItem('userName') != '';
  }

}
