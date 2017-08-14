"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var buslocation_1 = require('../buslocation/buslocation');
var faq_1 = require('../faq/faq');
var aboutus_1 = require('../aboutus/aboutus');
var login_1 = require('../login/login');
var MorePage = (function () {
    function MorePage(navCtrl, app, loadingCtrl, data) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.data = data;
        console.log(data.qr);
    }
    MorePage.prototype.Logout = function () {
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
        this.app.getRootNav().setRoot(login_1.LoginPage);
    };
    MorePage.prototype.AboutUs = function () {
        this.navCtrl.push(aboutus_1.AboutusPage);
    };
    MorePage.prototype.BusLocation = function () {
        this.navCtrl.push(buslocation_1.BusLocationPage);
    };
    MorePage.prototype.FAQ = function () {
        this.navCtrl.push(faq_1.FAQPage);
    };
    MorePage = __decorate([
        core_1.Component({
            selector: 'page-more',
            templateUrl: 'more.html'
        })
    ], MorePage);
    return MorePage;
}());
exports.MorePage = MorePage;
