import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgotpassword.html'
})
export class ForgotPage {

  constructor(public navCtrl: NavController,private  app:App,private  loadingCtrl: LoadingController) {

  }

  changepassword()
  {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();

    this.app.getRootNav().setRoot(TabsPage);
  }

}
