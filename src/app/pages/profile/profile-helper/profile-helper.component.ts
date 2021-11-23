import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-helper',
  templateUrl: './profile-helper.component.html',
  styleUrls: ['./profile-helper.component.css']
})
export class ProfileHelperComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deleteCadastro(): void {
    this.router.navigate(['cadastro-delete'])
  };

  editCadastro(): void {
    this.router.navigate(['cadastro-edit'])
  };

  editCurriculo(): void {
    this.router.navigate(['perfil/curriculum-info'])
  };

  readInteresse(): void {
    this.router.navigate(['interesse'])
  };

}
