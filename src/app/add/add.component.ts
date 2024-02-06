import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  private router: Router;

  constructor(protected routerp:Router) {
    this.router=routerp;
  }

  volver(){
    this.router.navigate(['']);
  }

}
