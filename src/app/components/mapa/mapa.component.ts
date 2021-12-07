import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
//declare let L;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {

  @Input() list: any;
  @Input() latLongArray: any;
  @Output() latlong = new EventEmitter();
  @Output() marcarPosition = new EventEmitter();
  @Input() marcar = true;
  @Input() inicializarMapa = false;
  @Input() dadosUser: any;

  private map: any = '';
  private popup: any;
  public myMarker: any
  public myMarkerLatLng: any
  public latitude: any;
  public longitude: any;
  public controleMapa = false;

  constructor() {
  }

  async ngAfterViewInit() {
    if (this.inicializarMapa) {
      this.initMap();
    }
  }


  private initMap() {
    // console.log('lat, long => ', this.latLongArray);
    this.controleMapa = true;
    this.map = L.map('map', {
      center: [-15.7801, -47.9292],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3
    });

    tiles.addTo(this.map);
    this.popup = new L.Popup()
    if (this.marcar) {
      this.map.on("click", (e: { latlng: { lat: number; lng: number; }; }) => {// get the coordinates
        if (this.myMarker) { // check
          this.map.removeLayer(this.myMarker); // remove
        }
        this.myMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map).bindPopup("<b>Marcado!</b><br />Você selecionou aqui.").openPopup();
        this.coord(e.latlng);
        this.latlong.emit([this.latitude, this.longitude]);
      });
    }
  }

  public coord(e: any) {
    this.myMarkerLatLng = e;
    this.latitude = this.myMarkerLatLng.lat
    this.longitude = this.myMarkerLatLng.lng
  }

  async marcarMatch(lat: any, long: any) {
    console.log(this.controleMapa);
    if (!this.controleMapa) {
      this.marcar = false;
      this.initMap();
    }
    var marker = new L.Marker([lat, long]);
    marker.addTo(this.map).bindPopup("<b>Colocar URL de redirect aqui.</b>").openPopup();
  }
}
