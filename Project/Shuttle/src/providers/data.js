"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Data = (function () {
    function Data(http) {
        this.http = http;
        console.log('Hello Data Provider');
    }
    Data.prototype.set = function (id, img, qr, firstname, lastname, email, nic, hand, submitted) {
        this.id = id;
        this.img = img;
        this.qr = qr;
        this.firstname = firstname;
        this.lastname = lastname;
        this.nic = nic;
        this.email = email;
        this.hand = hand;
        this.submitted = submitted;
    };
    Data.prototype.setticket = function (hand, submitted) {
        this.hand = hand;
        this.submitted = submitted;
    };
    Data = __decorate([
        core_1.Injectable()
    ], Data);
    return Data;
}());
exports.Data = Data;
