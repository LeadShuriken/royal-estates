import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstatesHomePage } from './estates-home';

@NgModule({
  declarations: [
    EstatesHomePage,
  ],
  imports: [
    IonicPageModule.forChild(EstatesHomePage),
  ],
})
export class EstatesHomePageModule {}
