"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var home_1 = require('../home/home');
require('rxjs/add/operator/retry');
require('rxjs/add/operator/timeout');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/map');
var PaymentPage = (function () {
    function PaymentPage(navCtrl, loadingCtrl, alertCtrl, data, http) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = data;
        this.http = http;
        this.payment = [];
        this.id = data.id;
        this.tab = this.navCtrl.parent;
    }
    PaymentPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                console.log('Radio data:', data);
                if (_this.interfaceid != null && _this.name != null && _this.amount != null) {
                    _this.http.get('http://192.168.8.102/CPMAD/Shuttle/payment.php?id=' + _this.id + '&amount=' + _this.amount).timeout(20000)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (datapayment) {
                        _this.payment = datapayment;
                        _this.data.setticket(_this.payment.hand, _this.payment.submitted);
                        console.log(_this.payment.status);
                        if (_this.payment.status == "200") {
                            _this.loadingCtrl.create({
                                content: 'Please wait...',
                                duration: 3000,
                                dismissOnPageChange: true
                            }).present();
                            console.log("success");
                            _this.data.setticket(_this.payment.hand, _this.payment.submitted);
                            home_1.HomePage.submitted = _this.payment.submitted;
                            home_1.HomePage.hand = _this.payment.hand;
                            var prompt_1 = _this.alertCtrl.create({
                                title: 'Success',
                                message: "Your payment succeeded",
                                buttons: [
                                    {
                                        text: 'Ok',
                                        handler: function (data) {
                                            console.log('Ok');
                                        }
                                    }
                                ]
                            });
                            prompt_1.present();
                        }
                        else {
                            console.log("Payment not succeeded ");
                            var prompt_2 = _this.alertCtrl.create({
                                title: 'Not success',
                                message: "Your payment is not succeeded",
                                buttons: [
                                    {
                                        text: 'Ok',
                                        handler: function (data) {
                                            console.log('Ok');
                                        }
                                    }
                                ]
                            });
                            prompt_2.present();
                        }
                    });
                }
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    PaymentPage = __decorate([
        core_1.Component({
            selector: 'page-contact',
            templateUrl: 'payment.html'
        })
    ], PaymentPage);
    return PaymentPage;
}());
exports.PaymentPage = PaymentPage;
