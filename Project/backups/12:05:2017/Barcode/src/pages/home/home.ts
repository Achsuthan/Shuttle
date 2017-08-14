import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';


import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  option:BarcodeScannerOptions;
  results:any;

  te:any;
  formate:any;
  cancelled:any;


  constructor(public navCtrl: NavController, public barcode: BarcodeScanner,public alertCtrl: AlertController,public http:Http, public loadingCtrl: LoadingController) {


  }


  async scanbarcode()

  {
    this.results=await this.barcode.scan();
    console.log(this.results);
    console.log(this.results.text);


    this.http.get('http://172.22.169.251/CPMAD/Shuttle/ticketckeck.php?id=' + this.results.text ).timeout(20000)
        .map(res => res.json())
        .subscribe(ticket => {

          if (ticket.status == "200") {
            this.loadingCtrl.create({
              content: 'Please wait...',
              duration: 3000,
              dismissOnPageChange: true
            }).present();


            console.log("success");
            let prompt = this.alertCtrl.create({
              title: 'Success',
              message: "Ticket Received from "+this.results.text,
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
          else if(ticket.status=="400") {
            console.log("Not succeeded ");

            let prompt = this.alertCtrl.create({
              title: 'Not success',
              message: "There is no ticket to scan in  "+this.results.text,
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
          else if(ticket.status=="800") {
            console.log("Error");

            let prompt = this.alertCtrl.create({
              title: 'Error',
              message: "ID Not found ",
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

}
