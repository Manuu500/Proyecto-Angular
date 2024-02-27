import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.css'],
  template: `
    <h1>{{ data.message }}</h1>
    <button mat-button (click)="close()">Cerrar</button>
  `,
})

export class ModalRegistroComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalRegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
