import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NcrApiProvider } from '../../providers/ncrapi/ncrapi';

import {FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';
// import {FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];
  list = [];
  listPrice = [];
  listFirebase = [];

  constructor(public navCtrl: NavController, public ncrService: NcrApiProvider, public firebaseService: FirebaseServiceProvider) {
    this.getdata();
    this.getAllPrice();
  }

  getdata() {
    this.ncrService.getItems().subscribe(res => {
      this.items = res.snapshot.slice(0, 50);
      this.firebaseService.getItems().subscribe(data => {
        this.listFirebase = data;
        for (let i = 0; i < 50; i++) {
          console.log(this.listFirebase[i].price);
          console.log(this.listFirebase[i].auditTrail.lastUpdated);
          this.list.push({item: this.items[i], oldPrice: this.listFirebase[i].price, oldEffectiveDate: this.listFirebase[i].auditTrail.lastUpdated})
        }
        console.log(data);
      });
      console.log(res);
    });
  }

  getAllPrice() {
    this.ncrService.getItemPrice().subscribe(res => {
      this.listPrice = res.snapshot;
    });
  }

  gotoItemPage(item) {
    this.navCtrl.push('ItemPage', {item: item});
    // this.list.forEach(element => {
    //   this.addItem(element);
    // });
  }


  getItem(item) {
    return item.shortDescription.values[0].value;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.list = [];
    for (let i = 0; i < 50; i++) {
      this.list.push({item: this.items[i], oldPrice: this.listFirebase[i].price, oldEffectiveDate: this.listFirebase[i].auditTrail.lastUpdated})
    }

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.list.filter((item) => {
        return (item.item.shortDescription.values[0].value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  checkPrice(i, oldPrice) {
    let result = 0;
    let itemNewPrice:number = this.listPrice.filter((item) => {
        return (item.priceId.itemCode.toLowerCase().indexOf(i.itemId.itemCode.toLowerCase()) > -1);
      })[0].price;

    if (itemNewPrice < oldPrice) {
      result = -1;
    } else if (itemNewPrice > oldPrice) {
      result = 1;
    }
    return result;
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ncrService.getItems().subscribe(res => {
      this.items = res.snapshot.slice(0, 50);
      this.firebaseService.getItems().subscribe(data => {
        this.listFirebase = data;
        for (let i = 0; i < 50; i++) {
          console.log(this.listFirebase[i].price);
          console.log(this.listFirebase[i].auditTrail.lastUpdated);
          this.list.push({item: this.items[i], oldPrice: this.listFirebase[i].price, oldEffectiveDate: this.listFirebase[i].auditTrail.lastUpdated})
        }
        console.log(data);
      });
      console.log(res);
      refresher.complete();
    });
    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   refresher.complete();
    // }, 1000);
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
