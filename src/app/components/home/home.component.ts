import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMail() {
    var link = "mailto:franklinarauj@gmail.com"
             + "?cc=franklinarauj@hotmail.com"
            //  + "&subject=" + encodeURIComponent(document.getElementById('subject').value)
            //  + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    window.location.href = link;
  }
}
