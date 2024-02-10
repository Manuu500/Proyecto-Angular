import { AppServiceService } from './../services/app-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/listartodos.service';
import { Chocobollo } from '../model/chocobollo';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  chocobollo:Chocobollo[]=[];
  private router: Router;
  private auth: ApiService;



  constructor(private  listarbollos:AppServiceService, routerp:Router, authp:ApiService) {
    this.router=routerp;
    this.auth=authp;
  }


  volver(){
    this.router.navigate(['']);
  }

  anadir(){
    this.router.navigate(['add']);
  }

  editar(){
    this.router.navigate(['edit']);
  }

  ngOnInit(): void {
    this.listarbollos.listarChocobollo().subscribe(chocobollo=>{
      (this.chocobollo=chocobollo);console.log(chocobollo)});
    }


}
