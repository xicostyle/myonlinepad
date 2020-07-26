import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyPadOnlineCadastrarSeComponent } from '../components/my-pad-online-cadastrar-se/my-pad-online-cadastrar-se.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cadastrarSe() {

      const dialogRef = this.dialog.open(MyPadOnlineCadastrarSeComponent, {
      });

      dialogRef.afterClosed().subscribe(result => {
      });

  }


  entrar() {

  }
}
