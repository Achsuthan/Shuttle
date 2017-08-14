import { Component } from '@angular/core';
import { NavController, App} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Data } from '../../providers/data';

import { Http } from '@angular/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public users : any = [];
  public username:any;
  public password:any;


  constructor(public navCtrl: NavController,private  loadingCtrl: LoadingController, private app:App,public alertCtrl: AlertController,public http:Http,public data:Data)
  {
  }



  login()
  {
    this.http.get('http://172.22.169.89/CPMAD/Shuttle/Loginconductor.php?username='+this.username+'&password='+this.password).timeout(2000)
        .map(res => res.json())
        .subscribe(data =>
        {

          this.users=data;

          console.log(this.users.status);
          if (this.users.status=="200")
          {
            this.users = data;
            this.loadingCtrl.create({
              content: 'Please wait...',
              duration: 3000,
              dismissOnPageChange: true
            }).present();


            console.log("success");
            this.data.setdata(this.username);
            this.app.getRootNav().setRoot(HomePage);
          }
          else
          {
            console.log("not success ");
            let prompt = this.alertCtrl.create({
              title: 'Credentials not found ',
              message: "Check your username or password",
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
        },(err)=>{
          let prompt = this.alertCtrl.create({
            title: 'Server Not found : 404',
            message: "Check the system later ",

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
        });
  }

}
