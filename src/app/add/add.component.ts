import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../services/app-service.service';
import { Chocobollo } from '../model/chocobollo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  chocobolloForm: FormGroup;
  id!: number;
  id_usu!: number;
  id_ingre!: number;
  addingChocobollo: boolean = false;


  constructor(
    private insertbollo: AppServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // Initialize the form with default values or values from the route
    this.chocobolloForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  volver(){
    this.router.navigate(['']);
  }

  add() {
    if (!this.addingChocobollo && this.chocobolloForm.valid) {
      this.addingChocobollo = true;

      const chocobolloData: Chocobollo = {
        id: this.id, // O el valor que corresponda para la creación de un nuevo registro
        id_usu: this.id_usu,
        nombre: this.chocobolloForm.value.nombre,
        tipo: this.chocobolloForm.value.tipo,
        ingredientes: []
      };

      this.insertbollo.insertBollo(chocobolloData).subscribe(() => {
        console.log('Chocobollo inserted successfully');
        this.router.navigate(['list']);
      }, error => {
        console.error('Error inserting Chocobollo', error);
      }).add(() => {
        this.addingChocobollo = false;
      });
    } else {
      console.log('Form is not valid or operation in progress');
    }
  }


}
