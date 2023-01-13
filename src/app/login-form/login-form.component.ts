import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  userForm: FormGroup = this._fb.group({
    userName: ['',[ Validators.required]],
    userPhone: ['',[ Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern(/[\d]/g)]],
    userEmail: ['',[ Validators.required, Validators.email]],
    userCity: ['', [Validators.required]]
  })

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  Submit(){
    localStorage.setItem('userName', this.userForm.get('userName')?.value);
    localStorage.setItem('userCity', this.userForm.get('userCity')?.value);
    localStorage.setItem('userPhone', this.userForm.get('userPhone')?.value);
    localStorage.setItem('userEmail', this.userForm.get('userEmail')?.value);
  }
}
