"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var profile_1 = require('../profile/profile');
var payment_1 = require('../payment/payment');
var home_1 = require('../home/home');
var more_1 = require('../more/more');
var TabsPage = (function () {
    function TabsPage(navParams, data) {
        this.navParams = navParams;
        this.data = data;
        this.tab1Root = home_1.HomePage;
        this.tab2Root = profile_1.ProfilePage;
        this.tab3Root = payment_1.PaymentPage;
        this.tab4Root = more_1.MorePage;
    }
    TabsPage = __decorate([
        core_1.Component({
            templateUrl: 'tabs.html'
        })
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
