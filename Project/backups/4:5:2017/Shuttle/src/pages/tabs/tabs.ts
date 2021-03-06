import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { PaymentPage } from '../payment/payment';
import { HomePage } from '../home/home';
import { MorePage } from '../more/more';
import { Data } from '../../providers/data';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public parameter1:any;
  public parameter2:any;

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = PaymentPage;
  tab4Root = MorePage;

  constructor( private navParams: NavParams, public  data:Data)
  {

    this.parameter1 = navParams.get('uid');
    this.parameter2 = navParams.get('img');
    console.log(this.data.id);
    console.log(this.parameter2);

  }

  public give()
  {
    return this.parameter1;
  }
}
