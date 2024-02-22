import { Ingrediente } from './../model/ingrediente';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../services/app-service.service';
import { Chocobollo } from '../model/chocobollo';

@Component({
  selector: 'app-tu-componente',
  template: `
    <mat-form-field class="col-sm-9">
      <div *ngFor="let checkbox of checkboxOptions">
        <mat-checkbox
          [(ngModel)]="checkbox.checked"
          name="{{ checkbox.name }}"
          >{{ checkbox.label }}</mat-checkbox
        >
      </div>
    </mat-form-field>
  `,
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
})
export class ReserveComponent {
  chocobolloForm: FormGroup;
  ingrediente: Ingrediente[] = [];
  private router: Router;
  id!: number;
  addingChocobollo: any;
  id_usu!: number;
  id_ingre!: number;

  constructor(
    private routerp: Router,
    private formBuilder: FormBuilder,
    private apiservice: AppServiceService,
    private fb: FormBuilder,
    private insertbollo: AppServiceService
  ) {
    this.router = routerp;
    this.chocobolloForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      ingredientes: [[], Validators.required],
    });
  }

  //This method makes the program go back to the main page
  volver() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.listarIngredientes();
    this.chocobolloForm.addControl('ingredientes', new FormControl([]));
  }

  listarIngredientes() {
    this.apiservice.listarIngrediente().subscribe(
      (listaIngredientes) => {
        this.ingrediente = listaIngredientes;
        console.log(listaIngredientes);
      },
      (error) => {
        console.error('Error al obtener la lista de ingredientes:', error);
      }
    );
  }

  add() {
    if (!this.addingChocobollo && this.chocobolloForm.valid) {
      this.addingChocobollo = true;

      const ingredientesValue = this.chocobolloForm.value.ingredientes;
      const selectedIngredientes: Ingrediente[] = Array.isArray(ingredientesValue)
        ? ingredientesValue.map((ingId: number) => {
            const ing = this.ingrediente.find((item) => item.id === ingId);
            return {
              id: ing?.id || 0, // Provide a default value if 'id' can be undefined
              nombre: ing?.nombre || '',
              cantidad: ing?.cantidad || '',
            };
          })
        : [];

      const chocobolloData: Chocobollo = {
        id: this.id,
        id_usu: this.id_usu,
        nombre: this.chocobolloForm.value.nombre,
        tipo: this.chocobolloForm.value.tipo,
        ingredientes: selectedIngredientes,
      };

      console.log('Ingredientes seleccionados:', selectedIngredientes);
      console.log('ChocobolloData:', chocobolloData);

      this.apiservice
        .insertBollo(chocobolloData)
        .subscribe(
          () => {
            console.log('Chocobollo inserted successfully');
            this.router.navigate(['list']);
          },
          (error) => {
            console.error('Error inserting Chocobollo', error);
          }
        )
        .add(() => {
          this.addingChocobollo = false;
        });
    } else {
      console.log('Form is not valid or operation in progress');
    }
  }

}
