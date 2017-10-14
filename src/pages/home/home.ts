import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NcrApiProvider } from '../../providers/ncrapi/ncrapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(public navCtrl: NavController, public nrcService: NcrApiProvider) {
    this.getdata();
  }

  getdata() {
    this.nrcService.getItems().subscribe(res => {
      this.items = res.snapshot.slice(0, 20);
      console.log(res);
    });
  }

  gotoItemPage(item, index) {
    this.navCtrl.push('ItemPage', {item: item, index: index});
  }

  getItem(item) {
    return item.shortDescription.values[0].value;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.getdata();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.shortDescription.values[0].value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getItemPrice() {
    this.nrcService.getItemPrice().subscribe(res => console.log(res));
  }
}
