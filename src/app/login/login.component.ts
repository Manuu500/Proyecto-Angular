import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private router: Router;


  constructor(protected routerp:Router) {
    this.router=routerp;
  }

  volver(){
    this.router.navigate(['']);
  }

  login(){

  }
}
