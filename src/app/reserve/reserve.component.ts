import { Ingrediente } from './../model/ingrediente';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../services/app-service.service';
import { Chocobollo } from '../model/chocobollo';

@Component({
  selector: 'app-tu-componente',
  template: `
    <div *ngFor="let ig of ingrediente">
      <mat-checkbox
        (change)="onIngredientChange(ig.id)"
        [checked]="ingredientesFormArray.value.includes(ig.id)"
      >
        {{ ig.nombre }}
      </mat-checkbox>
    </div>
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
      ingredientes: this.fb.array([], Validators.required),
    });
  }

  //This method makes the program go back to the main page
  volver() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.listarIngredientes();
    this.chocobolloForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      ingredientes: this.fb.array([]),
    });

    console.log('Form initialized:', this.chocobolloForm.value);
  }

  listarIngredientes() {
    this.apiservice.listarIngrediente().subscribe(
      (listaIngredientes) => {
        this.ingrediente = listaIngredientes;
        //console.log(listaIngredientes);
      },
      (error) => {
        console.error('Error al obtener la lista de ingredientes:', error);
      }
    );
  }

  add() {
    if (!this.addingChocobollo && this.chocobolloForm.valid) {
      this.addingChocobollo = true;

      // Call a service method to get the next available ID
      this.apiservice.getNextBolloId().subscribe(
        (nextId: number) => {
          const ingredientesValue = this.chocobolloForm.value.ingredientes;
          const selectedIngredientes: Ingrediente[] = Array.isArray(
            ingredientesValue
          )
            ? ingredientesValue.map((ingId: number) => {
                const ing = this.ingrediente.find((item) => item.id === ingId);

                return {
                  id: ing?.id || 0,
                  nombre: ing?.nombre || '',
                  cantidad: ing?.cantidad || '',
                };
              })
              .filter((ingrediente) => ingrediente.id !== null) // Filter out unselected ingredients
            : [];

          // Assign values to id and id_usu using the fetched nextId
          const chocobolloData: Chocobollo = {
            id: nextId, // Use the fetched nextId
            id_usu: this.id_usu || 0,
            nombre: this.chocobolloForm.value.nombre,
            tipo: this.chocobolloForm.value.tipo,
            ingredientes: selectedIngredientes, // Assign selectedIngredientes
          };

          console.log('ChocobolloData:', chocobolloData);
          console.log('Ingredientes seleccionados:', selectedIngredientes);

          // Insert the Chocobollo with the fetched nextId
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
        },
        (error) => {
          console.error('Error fetching next Chocobollo ID', error);
          this.addingChocobollo = false;
        }
      );
    } else {
      console.log('Form is not valid or operation in progress');
    }
  }


  onIngredientChange(ingredientId: number) {
    const ingredientesFormArray = this.chocobolloForm.get('ingredientes') as FormArray;

    if (!ingredientesFormArray) {
      console.error('FormArray not found');
      return;
    }

    const isChecked = ingredientesFormArray.value.includes(ingredientId);

    if (isChecked) {
      console.log(`Ingredient with ID ${ingredientId} deselected`);
      const index = ingredientesFormArray.controls.findIndex((control) => control.value === ingredientId);
      ingredientesFormArray.removeAt(index); // Eliminar del array de ingredientes
    } else {
      console.log(`Ingredient with ID ${ingredientId} selected`);
      ingredientesFormArray.push(new FormControl(ingredientId)); // Agregar al array de ingredientes
    }
  }
  get ingredientesFormArray() {
    return this.chocobolloForm.get('ingredientes') as FormArray;
  }
}

//console.log('Ingredientes seleccionados:', selectedIngredientes);
