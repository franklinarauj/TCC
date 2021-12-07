import { analyzeNgModules } from '@angular/compiler';
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

    var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // L.marker([51.5, -0.09], {icon: greenIcon}).addTo(this.map);

    tiles.addTo(this.map);
    this.popup = new L.Popup()
    if (this.marcar) {
      this.map.on("click", (e: { latlng: { lat: number; lng: number; }; }) => {// get the coordinates
        if (this.myMarker) { // check
          this.map.removeLayer(this.myMarker); // remove
        }
        this.myMarker = L.marker([e.latlng.lat, e.latlng.lng], {icon: greenIcon}).addTo(this.map).bindPopup("<b>Marcado!</b><br />Você selecionou aqui.").openPopup();
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

  async marcarMatch(lat: any, long: any, user: any) {
    var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var blueIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    console.log(this.controleMapa);
    if (!this.controleMapa) {
      this.marcar = false;
      this.initMap();
    }

    if (user.authorities[0].authority == "ROLE_PACIENTE") {
      var marker = new L.Marker([lat, long], {icon: blueIcon});
      marker.addTo(this.map).bindPopup(`${user.nome}`).openPopup();
    } else {
      var marker = new L.Marker([lat, long], {icon: greenIcon});
      marker.addTo(this.map).bindPopup(`${user.nome}`).openPopup();
    }
  }
}

//r.authorities[0].authority
