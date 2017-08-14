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
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  skip()
  {
    console.log(this.data.id);
    this.http.get('http://192.168.8.102/CPMAD/Shuttle/skip.php?id='+this.data.id).timeout(20000)
        .map(res => res.json())
        .subscribe(data =>
        {
        });

    this.app.getRootNav().setRoot(TabsPage);
  }
}
