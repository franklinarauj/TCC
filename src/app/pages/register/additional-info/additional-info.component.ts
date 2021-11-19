import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

interface Sexo {
  name: string;
}

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {

  tipoUsuario: string = "";
  isLinear = false;

  sexControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  sexs: Sexo[] = [
    {name: 'Masculino'},
    {name: 'Feminino'},
  ];

  constructor() { }

  ngOnInit() {

  }

}
