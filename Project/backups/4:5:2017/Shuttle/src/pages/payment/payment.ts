import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController,private  alerCtrl: AlertController) {
  }

  doRadio() {
    let alert = this.alerCtrl.create();
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
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

}
