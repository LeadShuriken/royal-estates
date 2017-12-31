import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { OverviewPage, MapPage, SimilarPage } from "../pages";
/**
 * Generated class for the EstatesHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-estates-home",
  templateUrl: "estates-home.html"
})
export class EstatesHomePage {
  estate: any = {};
  OverviewPageTab: any;
  MapPageTab: any;
  SimilarPageTab: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estate = navParams.get("item");
    this.OverviewPageTab = OverviewPage;
    this.MapPageTab = MapPage;
    this.SimilarPageTab = SimilarPage;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EstatesHomePage");
  }

  goHome() {
    this.navCtrl.popToRoot();
  }
}
