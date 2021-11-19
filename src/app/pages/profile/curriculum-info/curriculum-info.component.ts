import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-info',
  templateUrl: './curriculum-info.component.html',
  styleUrls: ['./curriculum-info.component.css']
})
export class CurriculumInfoComponent implements OnInit {
  displayFormationForm: boolean = false;

  constructor() {}

  getCheckboxValue(e: any) {
    this.displayFormationForm = e.checked
  }

  ngOnInit(): void {

  }

}
