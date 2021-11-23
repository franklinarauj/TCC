import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  lat: any;
  long: any;
  latLongArray: any;
  dadosUser: any;

  constructor(public dialog: MatDialog, 
    public pacienteService: PacienteService 
    ) {}

  openDialog(dadosUsuario?: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { dadosUsuario }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log("Modal fechada!");
    })

  }


  ngOnInit(): void {
    //@todo retornar dados do servico
    this.dadosUser = this.pacienteService.recuperarDados();
    console.log(this.dadosUser);
    //this.openDialog(this.pacienteService.recuperarDados());
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
