import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  private router: Router;

  constructor(protected routerp:Router) {
    this.router=routerp;
  }

  tiposChocobollos(){
    this.router.navigate(['list']);
  }
}
