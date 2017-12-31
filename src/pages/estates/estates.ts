import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { RoyalEstatesApiProvider } from "../../providers/royal-estates-api/royal-estates-api";
import { EstatesHomePage } from "../pages";
/**
 * Generated class for the EstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-estates",
  templateUrl: "estates.html"
})
export class EstatesPage {
  location: any = {};
  estates = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public customApi: RoyalEstatesApiProvider,
    public loadingController: LoadingController
  ) {
    this.location = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EstatesPage");
    let loader = this.loadingController.create({
      content: "Getting estates in location...",
      spinner: "dots"
    });
    loader.present().then(() => {
      this.customApi.getLocationData(this.location.id).subscribe(data => {
        this.estates = data.estates;
        loader.dismiss();
      });
    });
  }
  itemTapped($event, item) {
    this.customApi.setCurrentEstate(item);
    this.navCtrl.push(EstatesHomePage, { item: item });
  }
}
