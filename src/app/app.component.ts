import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TCC';
}

// FUNCAO A FAZER PARA ENVIAR EMAIL

// function sendMail() {
//   var link = "mailto:franklinarauj@gmail.com"
//            + "?cc=franklinarauj@hotmail.com"
//            + "&subject=" + encodeURIComponent(document.getElementById('subject').value)
//            + "&body=" + encodeURIComponent(document.getElementById('myText').value)
//   ;

//   window.location.href = link;
// }
