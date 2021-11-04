import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
//declare let L;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {


  private map : any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [  -15.7801, -47.9292 ],
      zoom: 10.5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

  }
  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
   }


}
