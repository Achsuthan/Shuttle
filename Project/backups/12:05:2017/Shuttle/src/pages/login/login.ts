import { Component } from '@angular/core';
import { NavController, App} from 'ionic-angular';
import { ForgotPage} from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SlidePage } from '../slide/slide';

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
  public userstemp : any = [];
  public email:any=[];

  public username:any;
  public password:any;


  constructor(public navCtrl: NavController,private  loadingCtrl: LoadingController, private app:App,public alertCtrl: AlertController,public http:Http,public data: Data)
  {

  }



  login()
  {

    if(this.username==null || this.password==null)
    {
      console.log("null");
      let prompt = this.alertCtrl.create({
        title: 'Null',
        message: "Enter your username or password ",

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
    else {
      if ((this.username.charAt(0)=="i" || this.username.charAt(0)=="I" ) && (this.username.charAt(1)=="t" || this.username.charAt(1)=="T")){
        this.username="IT"+this.username.substring(2,this.username.length+1);
        console.log(this.username);
      }
      this.http.get('http://172.22.169.251/CPMAD/Shuttle/templogin.php?username='+this.username+'&temppassword='+this.password).timeout(2000)
          .map(res => res.json())
          .subscribe(data =>
          {
            this.userstemp = data;
            this.loadingCtrl.create({
              content: 'Please wait...',
              duration: 3000,
              dismissOnPageChange: true
            }).present();


            console.log(this.userstemp.status);
            if (this.userstemp.status=="200")
            {
              console.log("success");
              console.log(this.userstemp.id);
              console.log(this.userstemp.img);
              this.data.set(this.userstemp.id,this.userstemp.img,this.userstemp.qr,this.userstemp.firstname,this.userstemp.lastname,this.userstemp.email,this.userstemp.nic,this.userstemp.hand,this.userstemp.submitted);
              this.app.getRootNav().setRoot(ForgotPage);

            }
            else
            {
              this.http.get('http://172.22.169.251/CPMAD/Shuttle/Login.php?username='+this.username+'&password='+this.password).timeout(2000)
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
                      console.log(this.users.id);
                      console.log(this.users.img);
                      if ((this.users.username==this.username) && (this.users.password==this.password)) {
                        this.data.set(this.users.id,this.users.img,this.users.qr,this.users.firstname,this.users.lastname,this.users.email,this.users.nic,this.users.hand,this.users.submitted);
                        if(this.users.temp=="false")
                        {
                          this.app.getRootNav().setRoot(TabsPage);
                        }
                        else
                        {
                          this.app.getRootNav().setRoot(SlidePage);
                        }
                      }
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
          },(err)=>{
            this.loadingCtrl.create({
              content: 'Please wait...',
              duration: 1000,
              dismissOnPageChange: true
            }).present();

            this.username="";
            this.password="";
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
            console.log('Saved clicked');


            var email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(email.test(data.title));

            if(email.test(data.title)){
              if ((data.title.charAt(0)=="i" || data.title.charAt(0)=="I" ) && (data.title.charAt(1)=="t" || data.title.charAt(1)=="T")){
                data.title="IT"+data.title.substring(2,data.title.length+1);
                console.log(data.title);
              }
              this.http.get('http://172.22.169.251/CPMAD/Shuttle/sendmail.php?email='+data.title)
                  .map(res => res.json())
                  .subscribe(data =>
                  {
                    this.email = data;
                    this.loadingCtrl.create({
                      content: 'Please wait...',
                      duration: 1000,
                      dismissOnPageChange: true
                    }).present();

                    if(this.email.status=="200")
                    {

                      this.email = data;
                      this.loadingCtrl.create({
                        content: 'Please wait...',
                        duration: 2000,
                        dismissOnPageChange: true
                      }).present();

                      let prompt = this.alertCtrl.create({
                        title: 'Success',
                        message: "You will receive mail with new temporary password ",

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
                    else
                    {
                      this.loadingCtrl.create({
                        content: 'Please wait...',
                        duration: 1000,
                        dismissOnPageChange: true
                      }).present();

                      let prompt = this.alertCtrl.create({
                        title: 'Error',
                        message: "Enter your SLIIT mail ",

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
                    this.loadingCtrl.create({
                      content: 'Please wait...',
                      duration: 1000,
                      dismissOnPageChange: true
                    }).present();
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
            else {
              let prompt = this.alertCtrl.create({
                title: 'Error',
                message: "Enter valid email address ",

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
        }
      ]
    });
    prompt.present();
  }

}
