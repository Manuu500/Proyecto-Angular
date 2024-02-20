import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tu-componente',
  template: `
    <mat-form-field class="col-sm-9">
      <div *ngFor="let checkbox of checkboxOptions">
        <mat-checkbox [(ngModel)]="checkbox.checked" name="{{checkbox.name}}">{{ checkbox.label }}</mat-checkbox>
      </div>
    </mat-form-field>
  `,
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {

  private router: Router;

  checkboxOptions = [
    { name: 'option1', label: 'Opción 1', checked: false },
    { name: 'option2', label: 'Opción 2', checked: false },
    { name: 'option3', label: 'Opción 3', checked: false },
    { name: 'option4', label: 'Opción 4', checked: false },
    { name: 'option5', label: 'Opción 5', checked: false },
  ];

  constructor(private routerp:Router, private formBuilder:FormBuilder) {
    this.router=routerp;

  }

  //This method makes the program go back to the main page
  volver(){
    this.router.navigate(['']);
  }
}
