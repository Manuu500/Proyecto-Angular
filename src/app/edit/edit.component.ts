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
  id_usu!: number;

  constructor(
    private updatebollo: AppServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.chocobolloForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.chocobolloForm.patchValue({
        nombre: params['nombre'],
        tipo: params['tipo'],
      });
    });
  }

  volver() {
    this.router.navigate(['']);
  }

  actualizar() {
    if (this.chocobolloForm.valid) {
      const chocobolloData: Chocobollo = {
        id: this.id,
        id_usu: this.id_usu,
        nombre: this.chocobolloForm.value.nombre,
        tipo: this.chocobolloForm.value.tipo,
        ingredientes: [],
      };

      this.updatebollo.updateBollo(chocobolloData).subscribe(
        () => {
          console.log('Chocobollo updated successfully');
          this.router.navigate(['list']);
        },
        (error) => {
          console.error('Error updating Chocobollo', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

  ngOnInit(): void {}
}
