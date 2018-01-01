import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RoyalEstatesApiProvider } from "../../providers/royal-estates-api/royal-estates-api";
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  lat: number = 42.698334;
  lng: number = 23.319941;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public customApi: RoyalEstatesApiProvider
  ) {

  }

  ionViewDidLoad() {
    const estate = this.customApi.getCurrentEstate();
    if (estate) {
      this.lat = estate.latitude;
      this.lng = estate.longitude;
    }
    console.log("ionViewDidLoad MapPage");
  }
}
