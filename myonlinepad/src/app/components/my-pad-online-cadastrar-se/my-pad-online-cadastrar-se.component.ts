import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'my-pad-online-cadastrar-se',
  templateUrl: './my-pad-online-cadastrar-se.component.html',
  styleUrls: ['./my-pad-online-cadastrar-se.component.css']
})
export class MyPadOnlineCadastrarSeComponent {
  constructor(public dialogRef: MatDialogRef<MyPadOnlineCadastrarSeComponent>,
    public snackBar: MatSnackBar) {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  criarConta() {
    this.snackBar.open('Em construção', 'Aviso')
  }

  voltar() {
    this.dialogRef.close();
  }
}
