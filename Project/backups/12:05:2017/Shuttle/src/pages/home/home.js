"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/retry');
require('rxjs/add/operator/timeout');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/map');
var HomePage = (function () {
    function HomePage(navCtrl, nav, loadingCtrl, alertCtrl, data, http) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = data;
        this.http = http;
        this.loan = [];
        this.id = data.id;
        this.tab = this.navCtrl.parent;
        HomePage.submitted = data.submitted;
        HomePage.hand = data.hand;
        this.pieChartLabels = ['Submitted ', 'Ticket in hand'];
        this.pieChartData = [HomePage.submitted, HomePage.hand];
        this.pieChartType = 'pie';
    }
    // events
    HomePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomePage.prototype.update = function () {
        this.pieChartLabels = ['Submitted ', 'Ticket in hand'];
        this.pieChartData = [HomePage.submitted, HomePage.hand];
        this.pieChartType = 'pie';
    };
    HomePage.prototype.payment = function () {
        this.tab.select(2);
    };
    HomePage.prototype.getloan = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Get Loan',
            message: "You will receive 2 extra tickets. When buying tickets for the next time you need to pay Rs 10 extra for one ticket that was given as loan. ",
            buttons: [
                {
                    text: 'I need Loan ',
                    handler: function (data) {
                        console.log('Loan clicked');
                        _this.http.get('http://192.168.8.102/CPMAD/Shuttle/loan.php?id=' + _this.id).timeout(20000)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            _this.loan = data;
                            console.log(_this.loan.status);
                            if (_this.loan.status == "200") {
                                _this.loadingCtrl.create({
                                    content: 'Please wait...',
                                    duration: 3000,
                                    dismissOnPageChange: true
                                }).present();
                                console.log("success");
                                _this.data.setticket(_this.loan.hand, _this.loan.submitted);
                                HomePage.hand = data.hand;
                                HomePage.submitted = data.submitted;
                                var prompt_1 = _this.alertCtrl.create({
                                    title: 'Loan received',
                                    message: "You have received 2 tickets",
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
                            else if (_this.loan.status == "800") {
                                console.log("Not allowd");
                                var prompt_2 = _this.alertCtrl.create({
                                    title: 'Not allowed',
                                    message: "Your are not allowed to take loan",
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
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('cancel clicked');
                    }
                },
            ]
        });
        prompt.present();
    };
    HomePage.submitted = 0;
    HomePage.hand = 0;
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
