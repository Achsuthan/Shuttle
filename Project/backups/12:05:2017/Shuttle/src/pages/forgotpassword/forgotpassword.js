"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var tabs_1 = require('../tabs/tabs');
require('rxjs/add/operator/retry');
require('rxjs/add/operator/timeout');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/map');
var ForgotPage = (function () {
    function ForgotPage(navCtrl, loadingCtrl, datavalue, http, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.login = [];
        this.id = datavalue.id;
    }
    ForgotPage.prototype.changepassword = function () {
        var _this = this;
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
        if (this.password1 == this.password2 && this.password1 != null && this.password2 != null) {
            this.http.get('http://192.168.8.102/CPMAD/Shuttle/updatepassword.php?id=' + this.id + "&password=" + this.password1)
                .map(function (res) { return res.json(); })
                .subscribe(function (datalogin) {
                _this.login = datalogin;
                _this.loadingCtrl.create({
                    content: 'Please wait...',
                    duration: 3000,
                    dismissOnPageChange: true
                }).present();
                if (_this.login.status == "200") {
                    var prompt_1 = _this.alertCtrl.create({
                        title: 'Success',
                        message: "Your password updated successfully ",
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
                    _this.app.getRootNav().setRoot(tabs_1.TabsPage);
                }
            });
        }
        else {
            var prompt_2 = this.alertCtrl.create({
                title: 'error',
                message: "Check your both password ",
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
        //    this.app.getRootNav().setRoot(TabsPage);
    };
    ForgotPage = __decorate([
        core_1.Component({
            selector: 'page-forgot',
            templateUrl: 'forgotpassword.html'
        })
    ], ForgotPage);
    return ForgotPage;
}());
exports.ForgotPage = ForgotPage;
