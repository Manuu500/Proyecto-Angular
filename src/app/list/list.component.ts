import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  private router: Router;

  constructor(protected routerp:Router) {
    this.router=routerp;
  }

  volver(){
    this.router.navigate(['']);
  }
}
