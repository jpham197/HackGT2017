import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetItemPricesProvider } from '../../providers/get-item-prices/get-item-prices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	items;

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
