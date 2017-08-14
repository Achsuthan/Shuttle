import { Component } from '@angular/core';
import { NavController, App} from 'ionic-angular';
import { ForgotPage} from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public users : any = [];

  public username:any;
  public password:any;


  constructor(public navCtrl: NavController,private  loadingCtrl: LoadingController, private app:App,public alertCtrl: AlertController,public http:Http,public data: Data)
  {

  }



  login()
  {

      this.http.get('http://localhost/CPMAD/Nirogi/Login.php?username='+this.username+'&password='+this.password).timeout(20000)
          .map(res => res.json())
          .subscribe(data =>
          {
            this.users = data;
            this.loadingCtrl.create({
              content: 'Please wait...',
              duration: 3000,
              dismissOnPageChange: true
            }).present();


            console.log(this.users.status);

            if (this.users.status=="200")
            {
              console.log("success");
              console.log(this.users.id);
              console.log(this.users.img);
              if ((this.users.username==this.username) && (this.users.password==this.password)) {
                this.data.set(this.users.id,this.users.img,this.users.qr,this.users.firstname,this.users.lastname,this.users.email,this.users.nic,this.users.hand,this.users.submitted);
                this.app.getRootNav().setRoot(TabsPage,{uid:this.users.id,img:this.users.img});
              }
            }
            else
            {
              console.log("not success ");
              let prompt = this.alertCtrl.create({
                title: 'Credentials not found ',
                message: "Check your username or password",
              });
              prompt.present();

            }
          });

  }

  forgot()
  {
    let prompt = this.alertCtrl.create({
      title: 'Reset Password',
      message: "Enter your email address to recover your password ",
      inputs: [
        {
          name: 'title',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },


        {
          text: 'Send',
          handler: data => {
            this.app.getRootNav().setRoot(ForgotPage);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
