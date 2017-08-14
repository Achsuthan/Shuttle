import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})
export class SlidePage {

  constructor(public navCtrl: NavController,private app:App,public http:Http,public data: Data) {

  }

  slides = [
    {
      title: "Welcome to Shuttle",
      description: "The <b>Shuttle App </b> will help the students to get the ticket anywhere anytime ",
      image: "assets/img/login.png",
    },
    {
      title: "Balance ?",
      description: "<b>To check the ticket balance </b> You can see the ticket history details in the home page with the graphical design",
      image: "assets/img/home.png",
    },
    {
      title: "Location ? ",
      description: "The  <b>location</b> can be used to get the current location and bus location",
      image: "assets/img/location.png",
    }
  ];

  skip()
  {
    console.log(this.data.id);
    this.http.get('http://172.22.169.89/CPMAD/Shuttle/skip.php?id='+this.data.id).timeout(20000)
        .map(res => res.json())
        .subscribe(data =>
        {
        });

    this.app.getRootNav().setRoot(TabsPage);
  }
}
