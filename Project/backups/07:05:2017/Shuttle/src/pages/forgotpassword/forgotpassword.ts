import { Component } from '@angular/core';
import { NavController,App} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgotpassword.html'
})
export class ForgotPage {

  public password:any;
  public login:any=[];
  public id:any;
  public password1:any;
  public password2:any;

  constructor(public navCtrl: NavController,private  loadingCtrl: LoadingController,datavalue :Data,public http:Http,public alertCtrl: AlertController,private app:App) {

    this.id = datavalue.id;
  }

  changepassword()
  {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();

    if(this.password1==this.password2 && this.password1 !=null && this.password2 !=null)
    {
      this.http.get('http://192.168.8.102/CPMAD/Shuttle/updatepassword.php?id='+this.id+"&password="+this.password1)
          .map(res => res.json())
          .subscribe(datalogin => {

            this.login = datalogin;
            this.loadingCtrl.create({
              content: 'Please wait...',
              duration: 3000,
              dismissOnPageChange: true
            }).present();

            if (this.login.status == "200") {
              let prompt = this.alertCtrl.create({
                title: 'Success',
                message: "Your password updated successfully ",

                buttons: [
                  {
                    text: 'Ok',
                    handler: data => {
                      console.log('Ok');
                    }
                  }
                ]
              });
              prompt.present();
              this.app.getRootNav().setRoot(TabsPage);
            }
          });


    }
    else
    {
      let prompt = this.alertCtrl.create({
      title: 'error',
      message: "Check your both password ",

      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('Ok');
          }
        }
      ]
    });
      prompt.present();
    }
    //    this.app.getRootNav().setRoot(TabsPage);
  }

}
