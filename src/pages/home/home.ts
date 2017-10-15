import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NcrapiProvider } from '../../providers/ncrapi/ncrapi';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  // constructor(public navCtrl: NavController, public nrcService: NcrapiProvider) {
	//
  // }
	splash = true;


	constructor(public toastCtrl: ToastController) {

  }

	ionViewDidLoad() {
		setTimeout(() => {
			this.splash = false;
		}, 4000);
	}

	// constructor(public splashScreen: splashScreen) {
	//
	// }

  // getdata() {
  //   this.nrcService.getdata().subscribe(res => {
  //     console.log(res);
  //   });
  // }
	//
  // gotoFirstPage() {
  //   this.navCtrl.push('FirstpagePage');
  // }

	//fix
	showToast() {
		let toast = this.toastCtrl.create({
			message: "Toast is good",
			duration: 1000
		});
		toast.present();
	}

	// this.splashScreen.show();
}
