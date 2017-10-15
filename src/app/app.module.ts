import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { NcrApiProvider } from '../providers/ncrapi/ncrapi';
import { HttpModule } from '@angular/http';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

let config = {
  apiKey: "AIzaSyBZPAp5e4mIYq76wvSCV11OU44Ks1y0jMM",
  authDomain: "gooddeal-be3c0.firebaseapp.com",
  databaseURL: "https://gooddeal-be3c0.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "119032167393"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NcrApiProvider,
    FirebaseServiceProvider
  ]
})
export class AppModule {}
