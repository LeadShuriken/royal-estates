import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { RoyalEstatesApiProvider } from "../../providers/royal-estates-api/royal-estates-api";
/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-locations",
  templateUrl: "locations.html"
})
export class LocationsPage {
  locations: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public customApi: RoyalEstatesApiProvider,
    public loadingController: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LocationsPage");
    let loader = this.loadingController.create({
      content: "Getting locations...",
      spinner: "dots"
    });
    loader.present().then(() => {
      this.customApi.getLocations().subscribe(locations => {
        this.locations = locations;
        loader.dismiss();
      });
    });
  }
}
