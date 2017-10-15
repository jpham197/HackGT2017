import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetItemPricesProvider } from '../../providers/get-item-prices/get-item-prices';

import {FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';
import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	items;

<<<<<<< Updated upstream
  constructor(public navCtrl: NavController, public service: GetItemPricesProvider) {
  	this.initializeItems();
  }

  initializeItems() {
  	this.items = [
  		'Nintendo Switch',
  		'PS4',
  		'Xbox',
  		'iPhone X',
  		'Water bottle',
  		'Shirt',
  		'Sunglasses',
  		'Free swag',
  		'Starbucks coffee',
  		'Internship'
  	];
=======
  tempItems: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public ncrService: NcrApiProvider, public firebaseService: FirebaseServiceProvider) {
    this.getdata();
    this.tempItems = this.firebaseService.getItems();
  }

  addItem(item) {
    this.firebaseService.addItem(item);
  }

  removeItem(id) {
    this.firebaseService.removeItem(id);
  }

  getdata() {
    this.ncrService.getItems().subscribe(res => {
      this.items = res.snapshot.slice(0, 50);
      this.list = this.items;
      // this.list.forEach(element => {
      //   this.addItem(element);
      // });
      console.log(res);
    });
>>>>>>> Stashed changes
  }

  getItems(ev) {
  	this.initializeItems();
  	var val = ev.target.value;

  	if (val && val.trim() != '') {
  		this.items = this.items.filter((item) => {
  			return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  		})
  	}
  }

  getData() {
	this.service.getdata().subscribe(res => console.log(res));
  }

  goToItemPage() {
  	this.navCtrl.push('FirstPage');
  }

}
