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
  latLongArray: any;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log("Modal fechada!");
    })

  }


  ngOnInit(): void {
    //@todo retornar dados do servico
    this.latLongArray = [
      {
      lat: -15.827837114029137,
      long: -47.87841796875001
          },
      {
        lat: -15.815948233847756,
        long: -47.92098999023438
      }
    ]
    return this.latLongArray;
  }


}
