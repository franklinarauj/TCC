import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  lat: any;
  long: any;
  latLongArray: any = [];
  dadosUser: any;
  token: any;
  response: any;
  teste: any = [];

  constructor(public dialog: MatDialog, 
    public pacienteService: PacienteService,
    public loginService: LoginServiceService
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


 ngOnInit() {
    //@todo retornar dados do servico
    this.loginService.getToken().then(async (token) => {
      this.token = token;
      if (token) {
        this.latLongArray = await this.pacienteService.getAtivos(token);
        this.latLongArray.forEach((r: any) => {
          this.teste.push({
            'latitude': r.latitude,
            'longitude': r.longitude
          })
        })
        this.latLongArray = this.teste;
        if(this.latLongArray > 0 ){
        //return this.latLongArray;
        }
      }
      //console.log('lat', this.latLongArray);
    });
  }
}
