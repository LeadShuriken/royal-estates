import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams
} from "ionic-angular";
import { RoyalEstatesApiProvider } from "../../providers/royal-estates-api/royal-estates-api";
import { EstatePersistanceProvider } from "../../providers/estate-persistance/estate-persistance";
import { ToastController } from "ionic-angular";
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
  estate: any = {};
  includes = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public customApi: RoyalEstatesApiProvider,
    public toastCtrl: ToastController,
    public persistance: EstatePersistanceProvider
  ) {
    this.estate = customApi.getCurrentEstate();
    this.includes = persistance.isInSavedEstates(this.estate);
  }

  saveHandle() {
    if (this.includes) {
      this.showToastWithSelectors();
    } else {
      this.persistance.addToSavedEstates(this.estate);
      this.includes = true;
    }
  }

  showToastWithSelectors() {
    const displayedTime = new Date().getTime();
    const duration: number = 10000;
    const toast = this.toastCtrl.create({
      message: "Are you sure you want to remove this estate from saved.",
      showCloseButton: true,
      closeButtonText: "Yes",
      dismissOnPageChange: false
    });
    toast.onDidDismiss(() => {
      const now = new Date().getTime();
      if (displayedTime + duration > now) {
        this.persistance.removeFromSavedEstates(this.estate);
        this.includes = false;
      }
    });
    toast.present();
  }

  doRefresh(refresher) {
    this.estate = this.customApi.getCurrentEstate();
    this.includes = this.persistance.isInSavedEstates(this.estate);
    refresher.complete();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OverviewPage");
  }
}
