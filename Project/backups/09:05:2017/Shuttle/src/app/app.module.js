"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ionic_angular_1 = require('ionic-angular');
var app_component_1 = require('./app.component');
var profile_1 = require('../pages/profile/profile');
var payment_1 = require('../pages/payment/payment');
var home_1 = require('../pages/home/home');
var tabs_1 = require('../pages/tabs/tabs');
var login_1 = require('../pages/login/login');
var more_1 = require('../pages/more/more');
var aboutus_1 = require('../pages/aboutus/aboutus');
var buslocation_1 = require('../pages/buslocation/buslocation');
var faq_1 = require('../pages/faq/faq');
var forgotpassword_1 = require('../pages/forgotpassword/forgotpassword');
var slide_1 = require('../pages/slide/slide');
var status_bar_1 = require('@ionic-native/status-bar');
var splash_screen_1 = require('@ionic-native/splash-screen');
var geolocation_1 = require('@ionic-native/geolocation');
var http_1 = require('@angular/http');
var data_1 = require('../providers/data');
var email_composer_1 = require('@ionic-native/email-composer');
var ng2_charts_1 = require('ng2-charts');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                profile_1.ProfilePage,
                payment_1.PaymentPage,
                home_1.HomePage,
                tabs_1.TabsPage,
                more_1.MorePage,
                buslocation_1.BusLocationPage,
                aboutus_1.AboutusPage,
                faq_1.FAQPage,
                forgotpassword_1.ForgotPage,
                slide_1.SlidePage,
                login_1.LoginPage
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
                http_1.HttpModule,
                ng2_charts_1.ChartsModule
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                profile_1.ProfilePage,
                payment_1.PaymentPage,
                home_1.HomePage,
                tabs_1.TabsPage,
                more_1.MorePage,
                buslocation_1.BusLocationPage,
                aboutus_1.AboutusPage,
                faq_1.FAQPage,
                forgotpassword_1.ForgotPage,
                slide_1.SlidePage,
                login_1.LoginPage
            ],
            providers: [
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                geolocation_1.Geolocation,
                data_1.Data,
                email_composer_1.EmailComposer,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
