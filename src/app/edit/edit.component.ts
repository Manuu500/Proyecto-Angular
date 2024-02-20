import { Chocobollo } from './../model/chocobollo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppServiceService } from '../services/app-service.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';






@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  chocobolloForm: FormGroup;
  id!: number;
  id_ingre!: number;
  id_usu!: number;

  constructor(
    private updatebollo: AppServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // Initialize the form with default values or values from the route
    this.chocobolloForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
    });

    // Subscribe to route params and update the form when they change
    this.route.params.subscribe(params => {
      // Assuming you have 'id', 'nombre', and 'tipo' in your route
      this.id = +params['id']; // Convert the id to a number

      this.chocobolloForm.patchValue({
        nombre: params['nombre'],
        tipo: params['tipo'],
      });
    });
  }

  //This comand make the program go back to the main page
  volver() {
    this.router.navigate(['']);
  }

  //This comand make the program update the selected chocobollo when the data is changed
  actualizar() {
    if (this.chocobolloForm.valid) {
      const chocobolloData: Chocobollo = {
        id: this.id,
        id_ingre: this.id_ingre,
        id_usu: this.id_usu,
        nombre: this.chocobolloForm.value.nombre,
        tipo: this.chocobolloForm.value.tipo,
      };

      this.updatebollo.updateBollo(chocobolloData).subscribe(() => {
        console.log('Chocobollo updated successfully');
        this.router.navigate(['list']);
      });
    } else {
      console.log('Form is not valid');
    }
  }

  add(){

  }

  ngOnInit(): void {}
}
