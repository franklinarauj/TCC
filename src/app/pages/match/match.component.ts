import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  lat: any;
  long: any;

  constructor(public dialog: MatDialog) {}

  preencherLatLong(evento: any) {
    this.lat = evento[0];
    this.long = evento[1];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log("Modal fechada!");
    })

  }


  ngOnInit(): void {}


}
