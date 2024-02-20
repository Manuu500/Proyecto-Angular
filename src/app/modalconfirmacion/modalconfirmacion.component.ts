import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h1>¿Estás seguro de que deseas borrar?</h1>
    <button mat-button (click)="confirm()">Confirmar</button>
    <button mat-button (click)="cancel()">Cancelar</button>
  `,
})
export class ModalConfirmacionComponent {
  constructor(private dialogRef: MatDialogRef<ModalConfirmacionComponent>) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
