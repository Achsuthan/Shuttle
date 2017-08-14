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
      var splChars = "*|,\":<>[]{}`\';()@&$#%";
      var num=0;
      var upper=0;
      var special=0;
      var lower=0;


      for (var i =0; i<this.password1.length; i++)
      {
        if (splChars.indexOf(this.password1.charAt(i)) != -1){
            console.log ("special charecter Detected "+ this.password1.charAt(i));
            special++;
        }
        if (  /^\d$/.test(this.password1.charAt(i)))
        {
          console.log("number found "+this.password1.charAt(i));
          num++;
        }

        if(this.password1.charAt(i)==this.password1.charAt(i).toUpperCase())
        {
          console.log("upper found "+this.password1.charAt(i));
          upper++;
        }
        if(this.password1.charAt(i)==this.password1.charAt(i).toLowerCase())
        {
          console.log("lower found "+this.password1.charAt(i));
          lower++;
        }
      }

      if(special>0 && num>0 && upper>0 && lower>0 && this.password1.length>=5)
      {
        this.http.get('http://172.22.170.132/CPMAD/Shuttle/updatepassword.php?id=' + this.id + "&password=" + this.password1)
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
            }, (err) => {
              let prompt = this.alertCtrl.create({
                title: 'Server not found : 404',
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
      else
      {
        let prompt = this.alertCtrl.create({
          title: 'Error ',
          message: "Your password must contain \n Numbers \n Uppercasese \n lowercase \n special characters \n Minimum length 5",

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
