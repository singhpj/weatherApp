import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebServiceService } from 'src/customs/services/web-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {

  userForm: FormGroup = this._fb.group({
    userName: ['',[ Validators.required]],
    userPhone: ['',[ Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]], ///[\d]/g
    userEmail: ['',[ Validators.required, Validators.email]],
    userCity: ['', [Validators.required]]
  })

  cityList:{loading:boolean, list:Array<any>} ={loading:false, list:[]}

  constructor(private _fb: FormBuilder, private webService:WebServiceService) { }

  ngOnInit(): void {
    // this.searchCity()List
  }

  Submit(){
    localStorage.setItem('userName', this.userForm.get('userName')?.value);
    localStorage.setItem('city', this.userForm.get('userCity').value?.name);
    localStorage.setItem('country', this.userForm.get('userCity').value?.country?.name);
    localStorage.setItem('lon', this.userForm.get('userCity')?.value?.coordinates?.longitude);
    localStorage.setItem('lat', this.userForm.get('userCity')?.value?.coordinates?.latitude);
    localStorage.setItem('userPhone', this.userForm.get('userPhone')?.value);
    localStorage.setItem('userEmail', this.userForm.get('userEmail')?.value);
  }

  searchCity(key: string) {
    this.cityList.loading = true;
    // this.webService.Get('getCityApi',key).then(res=>{
    //   this.cityList.loading = false;
    //   this.cityList.list=res
    // })
    // getCityApi
  }
  displayFn(value?: any) {
    if (value != '' && value != null) {
      this.userForm.get('userCity').setValue(value)
    }
    // return 'two'
    return value ?  this.userForm.get('userCity').value?.name : undefined;
  }

  resetValue(element : HTMLInputElement) {
    element.value = element?.value?.toLowerCase()?.trim() != this.userForm.get('userCity').value?.name?.toLowerCase()?.trim()?'':element?.value
  }
}
