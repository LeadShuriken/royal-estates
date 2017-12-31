import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RoyalEstatesApiProvider } from "../../providers/royal-estates-api/royal-estates-api";
/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-overview",
  templateUrl: "overview.html"
})
export class OverviewPage {
  estate: any = { refNumber: "" };
  included = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public customApi: RoyalEstatesApiProvider
  ) {
    this.estate = this.customApi.getCurrentEstate();
    this.included = this.customApi.isInSavedEstates(this.estate);
  }

  saveHandle() {
    if (this.includes) {
      this.customApi.removeFromSavedEstates(this.estate);
    } else {
      this.customApi.addToSavedEstates(this.estate);
    }
    this.includes = !this.includes;
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.estate = this.customApi.getCurrentEstate();
      this.included = this.customApi.isInSavedEstates(this.estate);
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OverviewPage");
  }
}
