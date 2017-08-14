import { Component } from '@angular/core';
import { NavController,Tabs,Nav } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab:Tabs;
  submitted=0;
  hand=0;
  public pieChartLabels:string[];
  public pieChartData:number[];
  public pieChartType:string

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(public navCtrl: NavController,private nav:Nav,public alertCtrl: AlertController,data:Data) {


    this.tab = this.navCtrl.parent;
    this.submitted=data.submitted;
    this.hand=data.hand;

    this.pieChartLabels = ['Submitted ', 'Ticket in hand'];
    this.pieChartData = [this.hand, this.submitted];
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
      message: "If there is no balance tickets, you can get the loan. You will receive 5 extra tickets. When buying tickets for the next time you need to pay Rs 10 extra for one ticket that was given as loan. ",
      buttons: [
        {
          text: 'Done',
          handler: data => {
            console.log('Done clicked');
          }
        },
      ]
    });
    prompt.present();
  }

}
