import { Component, } from '@angular/core';
import { NavController,Tabs } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';

import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

import {HomePage } from '../home/home';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  testRadioOpen: boolean;
  testRadioResult;
  public id:any;
  public amounttest:any;
  public amount=null;
  public interfaceid:any;
  public name:any;
  public payment:any=[];
  tab:Tabs;




  constructor(public navCtrl: NavController,private  loadingCtrl: LoadingController,public alertCtrl: AlertController,public data:Data,public http:Http) {
    this.id=data.id;
    this.tab = this.navCtrl.parent;
  }

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Payment Type');

    alert.addInput({
      type: 'radio',
      label: 'eZcash',
      value: 'eZcash',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'mCash',
      value: 'mCash'
    });

    alert.addInput({
      type: 'radio',
      label: 'MasterCard',
      value: 'MasterCard'
    });

    alert.addInput({
      type: 'radio',
      label: 'Visa',
      value: 'Visa'
    });

    alert.addInput({
      type: 'radio',
      label: 'American Express',
      value: 'American Express'
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);

        this.amounttest=this.amount;
        var amountvalidate=false;

        for (var i=0; i<this.amounttest.length; i++)
        {
           if (/^\d$/.test(this.amounttest.charAt(i)))
          {
            amountvalidate=true;
          }
        }

        if(this.interfaceid!=null && this.name!=null && this.amount!=null && amountvalidate )
        {

          //if(this.interfaceid==this.data.id && this.name==this.data.firstname) {
            this.http.get('http://172.22.170.132/CPMAD/Shuttle/payment.php?id=' + this.id + '&amount=' + this.amount).timeout(20000)
                .map(res => res.json())
                .subscribe(datapayment => {

                  this.payment = datapayment;
                  this.data.setticket(this.payment.hand, this.payment.submitted);

                  console.log(this.payment.status);
                  if (this.payment.status == "200") {
                    this.loadingCtrl.create({
                      content: 'Please wait...',
                      duration: 3000,
                      dismissOnPageChange: true
                    }).present();


                    console.log("success");

                    this.data.setticket(this.payment.hand, this.payment.submitted);

                    HomePage.submitted = this.payment.submitted;
                    HomePage.hand = this.payment.hand;

                    let prompt = this.alertCtrl.create({
                      title: 'Success',
                      message: "Your payment succeeded",
                      buttons: [
                        {
                          text: 'Ok',
                          handler: data => {
                            console.log('Ok');
                            this.amount = null;
                            this.interfaceid = "";
                            this.name = "";

                          }
                        }
                      ]
                    });
                    prompt.present();

                  }
                  else {
                    console.log("Payment not succeeded ");

                    let prompt = this.alertCtrl.create({
                      title: 'Not success',
                      message: "Your payment is not succeeded",
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
                }, (err) => {
                  let prompt = this.alertCtrl.create({
                    title: 'Server not found : 404',
                    message: "Check the system later",

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
              title: 'Error',
              message: "Enter correct values",
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
        /*}
        else
        {
          console.log("Enter correct values ");

          let prompt = this.alertCtrl.create({
            title: 'Error',
            message: "Enter all correct values",
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
        }*/

        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  onChangeAmount(amount)
  {
    var value=20;
    if(amount%20!=0)
    {
      if(amount%20>=10)
      {
        this.amount=this.amount-amount%20+value;
      }
      else
      {
        this.amount=amount-amount%20;
      }
    }
  }
  cancel()
  {
    this.amount=null;
    this.name=null;
    this.interfaceid=null;
  }
}
