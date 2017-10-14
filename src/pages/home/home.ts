import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NcrapiProvider } from '../../providers/ncrapi/ncrapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nrcService: NcrapiProvider) {

  }

  getdata() {
    this.nrcService.getdata().subscribe(res => {
      console.log(res);
    });
  }

  gotoFirstPage() {
    this.navCtrl.push('FirstpagePage');
  }
}
