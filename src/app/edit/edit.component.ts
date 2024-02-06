import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  private router: Router;

  constructor(protected routerp:Router) {
    this.router=routerp;
  }

  volver(){
    this.router.navigate(['']);
  }
}
