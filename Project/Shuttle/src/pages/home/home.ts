import { Component } from '@angular/core';
import { NavController,Tabs,Nav } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';

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

  public loan:any=[];
  public values:any=[];
  public id:any;
  tab:Tabs;
  public static submitted=0;
  public static  hand=0;
  public pieChartLabels:string[];
  public  pieChartData:number[];
  public pieChartType:string

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(public navCtrl: NavController,private nav:Nav,private  loadingCtrl: LoadingController,public alertCtrl: AlertController,public data:Data,public http:Http) {


    this.id=data.id;
    this.tab = this.navCtrl.parent;
    HomePage.submitted=data.submitted;
    HomePage.hand=data.hand;

    this.pieChartLabels = ['Submitted ', 'Ticket in hand'];
    this.pieChartData = [HomePage.submitted, HomePage.hand];
    this.pieChartType= 'pie';

  }

  public update()
  {

    this.http.get('http://172.22.169.89/CPMAD/Shuttle/getvalues.php?id='+this.data.id)
        .map(res => res.json())
        .subscribe(data => {

          this.values = data;

          console.log(this.values.status);
          if (this.values.status == "200") {
            this.loadingCtrl.create({
              content: 'Please wait...',
              duration: 2200,
              dismissOnPageChange: true
            }).present();
            console.log("success");

            this.data.setticket(this.values.hand,this.values.submitted);
            HomePage.hand=this.data.hand;
            HomePage.submitted=this.data.submitted;

          }
        });


    this.pieChartLabels = ['Submitted ', 'Ticket in hand'];
    this.pieChartData = [this.data.submitted, this.data.hand];
    this.pieChartType= 'pie';
  }

  payment()
  {
    this.tab.select(2);
  }

  getloan()
  {
    let prompt = this.alertCtrl.create({
      title: 'Get Loan',
      message: "You will receive 2 extra tickets. When buying tickets for the next time you need to pay Rs 10 extra for one ticket that was given as loan. ",
      buttons: [
        {
          text: 'I need Loan ',
          handler: data => {
            console.log('Loan clicked');

            this.http.get('http://172.22.169.89/CPMAD/Shuttle/loan.php?id='+this.data.id).timeout(20000)
                .map(res => res.json())
                .subscribe(data => {

                  this.loan = data;

                  console.log(this.loan.status);
                  if (this.loan.status == "200") {
                    this.loadingCtrl.create({
                      content: 'Please wait...',
                      duration: 3000,
                      dismissOnPageChange: true
                    }).present();
                    console.log("success");

                    this.data.setticket(this.loan.hand,this.loan.submitted);
                    HomePage.hand=data.hand;
                    HomePage.submitted=data.submitted;

                    let prompt = this.alertCtrl.create({
                      title: 'Loan received',
                      message: "You have received 2 tickets",
                      buttons: [
                        {
                          text: 'Ok',
                          handler: data => {
                            console.log('Ok');
                            this.update();
                          }
                        }
                      ]
                    });
                    prompt.present();

                  }
                  else if (this.loan.status == "800") {
                    console.log("Not allowd");
                    let prompt = this.alertCtrl.create({
                      title: 'Not allowed',
                      message: "Your are not allowed to take loan",
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
                });
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log('cancel clicked');
          }
        },
      ]
    });
    prompt.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.update();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
