import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Facebook } from '@ionic-native/facebook';
import { ListPage } from '../pages/list/list';
import { AddparkingPage } from '../pages/addparking/addparking';
import { EditpagePage} from '../pages/editpage/editpage';
import { SearchparkingPage} from '../pages/searchparking/searchparking';
import { HistoryofparkingPage} from '../pages/historyofparking/historyofparking';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddparkingPage,
    EditpagePage,
    SearchparkingPage,
    HistoryofparkingPage
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddparkingPage,
    EditpagePage,
    SearchparkingPage,
    HistoryofparkingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
