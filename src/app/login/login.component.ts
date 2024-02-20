import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private router: Router;
  username: string = "";
  password: string = "";


  constructor(private routerp:Router, private formBuilder:FormBuilder) {
    this.router=routerp;

  }

  volver(){
    this.router.navigate(['']);
  }

  login(){
    if(this.username === "" || this.password === "" ){
      console.log("Hay algún campo vacío");
    } else {
      var usuarioLogueado: LoginComponent;
    }
  }
}
