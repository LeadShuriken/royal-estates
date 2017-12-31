import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { RoyalEstatesApiProvider } from "../providers/royal-estates-api/royal-estates-api";
import { PipesModule } from '../pipes/pipes.module';

import {
  EstatesHomePage,
  LocationsPage,
  EstatesPage,
  MyEstatesPage,
  OverviewPage,
  MapPage,
  SimilarPage
} from "../pages/pages";

import { MyApp } from "./app.component";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [
    MyApp,
    EstatesHomePage,
    LocationsPage,
    EstatesPage,
    MyEstatesPage,
    OverviewPage,
    MapPage,
    SimilarPage
  ],
  imports: [
    PipesModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EstatesHomePage,
    LocationsPage,
    EstatesPage,
    MyEstatesPage,
    OverviewPage,
    MapPage,
    SimilarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RoyalEstatesApiProvider
  ]
})
export class AppModule {}
