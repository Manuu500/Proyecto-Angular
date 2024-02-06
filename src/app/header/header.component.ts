import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

private router: Router;

  constructor(protected routerp:Router) {
    this.router=routerp;
   }


    registro(){
      this.router.navigate(['register']);
    }

    layout(){
      this.router.navigate(['layout']);
    }

    login(){
      this.router.navigate(['login']);
    }
}
