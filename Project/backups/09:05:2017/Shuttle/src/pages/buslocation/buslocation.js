"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BusLocationPage = (function () {
    function BusLocationPage(navCtrl, geolocation, geolocation2) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.geolocation2 = geolocation2;
    }
    BusLocationPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    BusLocationPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
            var content = "<h4>MyLocation</h4>";
            var infoWindow = new google.maps.InfoWindow({
                content: content
            });
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(_this.map, marker);
            });
        }, function (err) {
            console.log(err);
        });
    };
    BusLocationPage.prototype.buslocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function () {
            var latLng = new google.maps.LatLng(6.9146818, 79.9733288);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
            var content = "<h4>BusLocation</h4>";
            var infoWindow = new google.maps.InfoWindow({
                content: content
            });
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(_this.map, marker);
            });
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        core_1.ViewChild('map')
    ], BusLocationPage.prototype, "mapElement", void 0);
    BusLocationPage = __decorate([
        core_1.Component({
            selector: 'page-buslocation',
            templateUrl: 'buslocation.html'
        })
    ], BusLocationPage);
    return BusLocationPage;
}());
exports.BusLocationPage = BusLocationPage;
