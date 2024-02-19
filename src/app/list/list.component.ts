import { AppServiceService } from './../services/app-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/listartodos.service';
import { Chocobollo } from '../model/chocobollo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  chocobollo:Chocobollo[]=[];
  private router: Router;
  private auth: ApiService;
  chocobolloForm!: FormGroup;




  constructor(private listarbollos:AppServiceService, private deletebollos:AppServiceService, private routerp:Router, private authp:ApiService, private fb:FormBuilder) {
    this.router=routerp;
    this.auth=authp;

  }


  volver(){
    this.router.navigate(['']);
  }

  anadir(){

    this.router.navigate(['add']);
  }

  editar(id: number, nombre: string, tipo:string){
    this.router.navigate(['edit', id, nombre, tipo]);
  }



  ngOnInit(): void {
    this.listarChocobollos();
  }

  listarChocobollos(){
    this.listarbollos.listarChocobollo().subscribe(chocobollo=>{
      (this.chocobollo=chocobollo);console.log(chocobollo)});
  }

  borrar(id: number) {
    this.deletebollos.borrarBollo(id).subscribe(
      (response: HttpResponse<any>) => {
        console.log(`Chocobollo with ID ${id} deleted successfully`, response);
        this.listarChocobollos();
      },
      (error) => {
        console.error(`Error deleting Chocobollo with ID ${id}`, error);
      }
    );
  }
}
