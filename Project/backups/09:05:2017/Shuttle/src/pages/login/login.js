"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forgotpassword_1 = require('../forgotpassword/forgotpassword');
var tabs_1 = require('../tabs/tabs');
var slide_1 = require('../slide/slide');
require('rxjs/add/operator/retry');
require('rxjs/add/operator/timeout');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/map');
var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, app, alertCtrl, http, data) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.data = data;
        this.users = [];
        this.userstemp = [];
        this.email = [];
        this.temppassword = "12345";
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.username == null || this.password == null) {
            console.log("null");
            var prompt_1 = this.alertCtrl.create({
                title: 'Null',
                message: "Enter your username or password ",
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
            this.http.get('http://192.168.8.102/CPMAD/Shuttle/templogin.php?username=' + this.username + '&temppassword=' + this.password).timeout(20000)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.userstemp = data;
                _this.loadingCtrl.create({
                    content: 'Please wait...',
                    duration: 3000,
                    dismissOnPageChange: true
                }).present();
                console.log(_this.userstemp.status);
                if (_this.userstemp.status == "200") {
                    console.log("success");
                    console.log(_this.userstemp.id);
                    console.log(_this.userstemp.img);
                    _this.data.set(_this.userstemp.id, _this.userstemp.img, _this.userstemp.qr, _this.userstemp.firstname, _this.userstemp.lastname, _this.userstemp.email, _this.userstemp.nic, _this.userstemp.hand, _this.userstemp.submitted);
                    _this.app.getRootNav().setRoot(forgotpassword_1.ForgotPage);
                }
                else {
                    _this.http.get('http://192.168.8.102/CPMAD/Shuttle/Login.php?username=' + _this.username + '&password=' + _this.password).timeout(20000)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.users = data;
                        console.log(_this.users.status);
                        if (_this.users.status == "200") {
                            _this.users = data;
                            _this.loadingCtrl.create({
                                content: 'Please wait...',
                                duration: 3000,
                                dismissOnPageChange: true
                            }).present();
                            console.log("success");
                            console.log(_this.users.id);
                            console.log(_this.users.img);
                            if ((_this.users.username == _this.username) && (_this.users.password == _this.password)) {
                                _this.data.set(_this.users.id, _this.users.img, _this.users.qr, _this.users.firstname, _this.users.lastname, _this.users.email, _this.users.nic, _this.users.hand, _this.users.submitted);
                                if (_this.users.temp == "false") {
                                    _this.app.getRootNav().setRoot(tabs_1.TabsPage);
                                }
                                else {
                                    _this.app.getRootNav().setRoot(slide_1.SlidePage);
                                }
                            }
                        }
                        else {
                            console.log("not success ");
                            var prompt_2 = _this.alertCtrl.create({
                                title: 'Credentials not found ',
                                message: "Check your username or password",
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
            });
        }
    };
    LoginPage.prototype.mainlogin = function () {
    };
    LoginPage.prototype.forgot = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Reset Password',
            message: "Enter your email address to recover your password ",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.http.get('http://192.168.8.102/CPMAD/Shuttle/sendmail.php?email=' + data.title + "&password=" + _this.temppassword)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            _this.email = data;
                            _this.loadingCtrl.create({
                                content: 'Please wait...',
                                duration: 3000,
                                dismissOnPageChange: true
                            }).present();
                            if (_this.email.status == "200") {
                                var prompt_3 = _this.alertCtrl.create({
                                    title: 'Success',
                                    message: "You will receive mail with new temprory password ",
                                    buttons: [
                                        {
                                            text: 'Ok',
                                            handler: function (data) {
                                                console.log('Ok');
                                            }
                                        }
                                    ]
                                });
                                prompt_3.present();
                            }
                            else {
                                var prompt_4 = _this.alertCtrl.create({
                                    title: 'Error',
                                    message: "Check your Email ",
                                    buttons: [
                                        {
                                            text: 'Ok',
                                            handler: function (data) {
                                                console.log('Ok');
                                            }
                                        }
                                    ]
                                });
                                prompt_4.present();
                            }
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
