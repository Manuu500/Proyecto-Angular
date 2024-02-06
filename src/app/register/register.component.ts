import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private router: Router;

  constructor(protected routerp:Router) {
    this.router=routerp;
  }


  index(){
    this.router.navigate([""]);
  }
}
