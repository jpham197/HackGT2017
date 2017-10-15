import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NcrApiProvider } from '../../providers/ncrapi/ncrapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  list;
  listPrice = [];

  constructor(public navCtrl: NavController, public ncrService: NcrApiProvider) {
    this.getdata();
    this.getAllPrice();
  }

  getdata() {
    this.ncrService.getItems().subscribe(res => {
      this.items = res.snapshot.slice(0, 50);
      this.list = this.items;
      console.log(res);
    });
  }

  getAllPrice() {
    this.ncrService.getItemPrice().subscribe(res => {
      this.listPrice = res.snapshot;
    });
  }

  gotoItemPage(item, index) {
    this.navCtrl.push('ItemPage', {item: item});
  }

  getItem(item) {
    return item.shortDescription.values[0].value;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.list = this.items;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.items.filter((item) => {
        return (item.shortDescription.values[0].value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  checkPrice(i) {
    let result = 0;
    let itemNewPrice:number = this.listPrice.filter((item) => {
        return (item.priceId.itemCode.toLowerCase().indexOf(i.itemId.itemCode.toLowerCase()) > -1);
      })[0].price;

    let itemOldPrice:number = 5.15;
    if (itemNewPrice < itemOldPrice) {
      result = -1;
    } else if (itemNewPrice > itemOldPrice) {
      result = 1;
    }
    return result;
  }

  getItemPrice() {
    this.ncrService.getItemPrice().subscribe(res => console.log(res));
  }

  getSpecificItem() {
    this.ncrService.getItem('658540dc-8dc9-42c9-97f1-b7e5d3bc6f71').subscribe(res => {
      console.log(res);
    });
  }
}
