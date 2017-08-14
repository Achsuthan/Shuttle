import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { BusLocationPage } from '../buslocation/buslocation';
import { FAQPage } from '../faq/faq';
import { AboutusPage } from '../aboutus/aboutus';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {


  constructor(public navCtrl: NavController,private app:App,private  loadingCtrl: LoadingController,public  data:Data) {

    console.log(data.qr);
  }

  Logout()
  {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
    this.app.getRootNav().setRoot(LoginPage);
  }
  AboutUs()
  {
    this.navCtrl.push(AboutusPage);
  }

  BusLocation()
  {
    this.navCtrl.push(BusLocationPage);
  }

  FAQ()
  {
    this.navCtrl.push(FAQPage);
  }
}
