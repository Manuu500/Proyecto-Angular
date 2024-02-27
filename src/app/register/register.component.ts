import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { AppServiceService } from '../services/app-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalRegistroComponent } from '../modal-registro/modal-registro.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private router: Router;
  usuForm!: FormGroup;
  id!: number;
  id_bollo!: number;

  constructor(private routerp:Router, private apiservice:AppServiceService, private fb:FormBuilder, private dialog: MatDialog) {
    this.router=routerp;
    this.usuForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
    });
  }

  addUsu(){
    const usuData: Usuario = {
      id: this.id,
      id_bollo: this.id_bollo,
      nombre: this.usuForm.value.nombre,
      apellidos: this.usuForm.value.apellidos,
      email: this.usuForm.value.email,
      contraseña: this.usuForm.value.contraseña,
  };

    console.log(usuData);
    this.apiservice.insertUsuario(usuData).subscribe().add();

    this.openSuccessModal();
    this.router.navigate([""]);
  }


  openSuccessModal() {
    this.dialog.open(ModalRegistroComponent, {
      width: '300px',
      data: { message: 'Usuario creado con éxito' }
    });
  }

    index(){
      this.router.navigate([""]);
    }
  }




