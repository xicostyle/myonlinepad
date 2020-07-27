import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'my-pad-online-entrar',
  templateUrl: './my-pad-online-entrar.component.html',
  styleUrls: ['./my-pad-online-entrar.component.css']
})
export class MyPadOnlineEntrarComponent implements OnInit {

  formGroupEntrar: FormGroup;
  formGroupRecuperarSenha: FormGroup;
  recoverPassword = false
  hidePassword = true;

  constructor(public dialogRef: MatDialogRef<MyPadOnlineEntrarComponent>,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder) {}

  
  ngOnInit(){

    this.formGroupEntrar = this.formBuilder.group({
      usarnameEmail: ['', [Validators.required]],
      password: ['',[Validators.required]]
    });
    this.formGroupRecuperarSenha = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.hidePassword = true;
  }

  submitEntrar() {
    if (this.formGroupEntrar.valid) {
      this.snackBar.open('Em construção', 'Aviso')
    }
  }

  voltar() {
    this.dialogRef.close();
  }

  submitRecuperarSenha() {
    if (this.formGroupRecuperarSenha.valid) {
      this.snackBar.open('Em construção', 'Aviso')
    }
  }

}
