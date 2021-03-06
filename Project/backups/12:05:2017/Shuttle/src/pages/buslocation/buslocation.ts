import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-buslocation',
  templateUrl: 'buslocation.html'
})
export class BusLocationPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController,  public geolocation: Geolocation,public geolocation2: Geolocation) {

  }
  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){


    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      let content = "<h4>MyLocation</h4>";


      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });

    }, (err) => {
      console.log(err);
    });

  }

  buslocation()
  {

    this.geolocation.getCurrentPosition().then(() => {

      let latLng = new google.maps.LatLng(6.9146818, 79.9733288);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      let content = "<h4>BusLocation</h4>";


      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });

    }, (err) => {
      console.log(err);
    });
  }
  /* loadMap(){

   let latLng = new google.maps.LatLng(-34.9290, 138.6010);

   let mapOptions = {
   center: latLng,
   zoom: 15,
   mapTypeId: google.maps.MapTypeId.ROADMAP
   }

   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

   }*/

  /*addMarker(){

   let marker = new google.maps.Marker({
   map: this.map,
   animation: google.maps.Animation.DROP,
   position: this.map.getCenter()
   });

   let content = "<h4>Information!</h4>";

   this.addInfoWindow(marker, content);

   }

   addInfoWindow(marker, content){

   let infoWindow = new google.maps.InfoWindow({
   content: content
   });

   google.maps.event.addListener(marker, 'click', () => {
   infoWindow.open(this.map, marker);
   });

   }*/
}
