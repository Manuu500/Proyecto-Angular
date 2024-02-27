import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  private router: Router;

  constructor(protected routerp:Router, private dialog: MatDialog) {
    this.router=routerp;
  }

  tiposChocobollos(){
    this.router.navigate(['list']);
  }

  reservaChocobollo(){
    this.router.navigate(['reserve']);
  }

  ngOnInit(){
  }


}
