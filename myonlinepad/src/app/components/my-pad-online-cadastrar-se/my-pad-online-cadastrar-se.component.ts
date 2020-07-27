import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'my-pad-online-cadastrar-se',
  templateUrl: './my-pad-online-cadastrar-se.component.html',
  styleUrls: ['./my-pad-online-cadastrar-se.component.css']
})
export class MyPadOnlineCadastrarSeComponent implements OnInit {

  formGroupCadastrarSe: FormGroup;
  hidePassword = true;

  constructor(public dialogRef: MatDialogRef<MyPadOnlineCadastrarSeComponent>,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder) {
    
  }

  ngOnInit(){

    this.formGroupCadastrarSe = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    
    this.hidePassword = true;
  }

  submitCriarConta() {
    if (this.formGroupCadastrarSe.valid) {
      this.snackBar.open('Em construção', 'Aviso')
    }
  }

  voltar() {
    this.dialogRef.close();
  }
}
