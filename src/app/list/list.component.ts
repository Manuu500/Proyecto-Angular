import { AppServiceService } from './../services/app-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chocobollo } from '../model/chocobollo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { ApiService } from '../services/listartodos.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalConfirmacionComponent } from '../modalconfirmacion/modalconfirmacion.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  template: `
    <div class="align-buttons">
      <button (click)="openConfirmationDialog(bollo.id)" mat-raised-button class="btn-sm m-2" style="background-color: red;">Borrar</button>
    </div>
  `,
})

export class ListComponent {
  chocobollo:Chocobollo[]=[];
  private router: Router;
  private auth: ApiService;
  chocobolloForm!: FormGroup;




  constructor(private listarbollos:AppServiceService, private deletebollos:AppServiceService, private routerp:Router, private authp:ApiService, private fb:FormBuilder, private dialog: MatDialog) {
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

  confirmacionModal(id: number): void {
    const dialogRef = this.dialog.open(ModalConfirmacionComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // El usuario confirmó la eliminación, puedes llamar a tu función de borrar aquí
        this.borrar(id);
      }
    });
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
