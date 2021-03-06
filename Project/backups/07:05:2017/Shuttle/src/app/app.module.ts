import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { PaymentPage } from '../pages/payment/payment';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MorePage} from '../pages/more/more';
import { AboutusPage} from '../pages/aboutus/aboutus';
import { BusLocationPage} from '../pages/buslocation/buslocation';
import { FAQPage} from '../pages/faq/faq';
import { ForgotPage } from '../pages/forgotpassword/forgotpassword';
import { SlidePage } from '../pages/slide/slide';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { Data } from '../providers/data';

import { EmailComposer } from '@ionic-native/email-composer';


import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    PaymentPage,
    HomePage,
    TabsPage,
    MorePage,
    BusLocationPage,
    AboutusPage,
    FAQPage,
    ForgotPage,
    SlidePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    PaymentPage,
    HomePage,
    TabsPage,
    MorePage,
    BusLocationPage,
    AboutusPage,
    FAQPage,
    ForgotPage,
    SlidePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Data,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
