import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public img:any;
  public nic:any;
  public email:any;
  public firstname:any;
  public lastname:any;
  public qr:any;
  public id:any;


  constructor(public navCtrl: NavController, data:Data) {
    this.id=data.id;
    this.img=data.img;
    this.qr=data.qr;
    this.nic=data.nic;
    this.email=data.email;
    this.firstname=data.firstname;
    this.lastname=data.lastname;

  }

}
