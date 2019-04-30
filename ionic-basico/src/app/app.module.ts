import { Tamanhos } from './../providers/tamanhos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { DeliveryPage } from '../pages/delivery/delivery';
import { CreateAccountPage } from '../pages/create-account/create-account';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Messages } from '../providers/messages';
import { Toast } from '../providers/toast';
import { Login } from '../providers/login';
import { HttpProvider } from '../providers/http';
import { HttpModule } from '@angular/http';
import { Sabores } from '../providers/sabores';
import { Cidades } from '../providers/cidades';
import { Bairros } from '../providers/bairros';
import { Create } from './../providers/create';
import { CreateSaborPage } from '../pages/create-sabor/create-sabor';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    DeliveryPage,
    CreateAccountPage,
    CreateSaborPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    DeliveryPage,
    CreateAccountPage,
    CreateSaborPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toast,
    Login,
    HttpProvider,
    HttpModule,
    Tamanhos,
    Sabores,
    Cidades,
    Bairros,
    Create,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
