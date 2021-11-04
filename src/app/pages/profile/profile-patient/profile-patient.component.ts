import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deleteCadastro(): void {
    this.router.navigate(['/cadastro-delete'])
  };

  editCadastro(): void {
    this.router.navigate(['/cadastro-edit'])
  };

}
