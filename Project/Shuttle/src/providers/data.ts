import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  public id:any;
  public img:any;
  public qr:any;
  public nic:any;
  public firstname:any;
  public lastname:any;
  public email:any;
  public hand:any;
  public submitted:any;

  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

  set(id,img,qr,firstname,lastname,email,nic,hand,submitted)
  {

    this.id=id;
    this.img=img;
    this.qr=qr;
    this.firstname=firstname;
    this.lastname=lastname;
    this.nic=nic;
    this.email=email;
    this.hand=hand;
    this.submitted=submitted;
  }

  setticket(hand,submitted)
  {
    this.hand=hand;
    this.submitted=submitted;
  }

}
