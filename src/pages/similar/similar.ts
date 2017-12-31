import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RoyalEstatesApiProvider } from "../../providers/royal-estates-api/royal-estates-api";
/**
 * Generated class for the SimilarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-similar",
  templateUrl: "similar.html"
})
export class SimilarPage {
  estate: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public customApi: RoyalEstatesApiProvider
  ) {
    this.estate = this.customApi.getCurrentEstate();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SimilarPage");
  }
}
