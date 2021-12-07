import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MapaComponent } from 'src/app/components/mapa/mapa.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { CuidadorService } from 'src/app/services/cuidador.service';

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
    public cuidadorService: CuidadorService,
    public loginService: LoginServiceService,
    private MapaComponent: MapaComponent
  ) {}

  openDialog(dadosUsuario ? : any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        dadosUsuario
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log("Modal fechada!");
    })
  }

  ngOnInit() {

    this.loginService.getToken().then(async (token) => {
      this.token = token;
      if (token) {
        this.latLongArray = await this.pacienteService.getAtivos(token);
        this.latLongArray.forEach((r: any) => {
          //console.log(r.latitude, r.longitude);
          //console.log('obj=>', r)
          if (r.latitude && r.longitude) {
            this.MapaComponent.marcarMatch(r.latitude, r.longitude, r);
          }
        })
      }
    });

    this.loginService.getToken().then(async (token) => {
      this.token = token;
      if (token) {
        this.latLongArray = await this.cuidadorService.getAtivos(token);
        this.latLongArray.forEach((r: any) => {
          //console.log(r.latitude, r.longitude);
          //console.log('obj=>', r)
          if (r.latitude && r.longitude) {
            this.MapaComponent.marcarMatch(r.latitude, r.longitude, r);
            console.log(r)
          }
        })
      }
    });
  }
}
