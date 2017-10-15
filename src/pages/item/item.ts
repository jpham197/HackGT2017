import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NcrApiProvider} from "../../providers/ncrapi/ncrapi";

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  item;
  itemName:string;
  itemNewPrice:number;
  itemDescription:string;
  itemNewEffectiveDate:Date;
  itemOldPrice:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ncrApi: NcrApiProvider) {
    this.item = navParams.get('item');
    this.itemName = this.item.shortDescription.values[0].value;
    this.itemDescription = this.item.longDescription.values[0].value;
    ncrApi.getItemPrice().subscribe(res => {
      this.itemNewPrice = res.snapshot.filter((item) => {
        // console.log(item.priceId.itemCode);
        // console.log(this.item.itemId.itemCode);
        return (item.priceId.itemCode.toLowerCase().indexOf(this.item.itemId.itemCode.toLowerCase()) > -1);
      })[0].price;
      // console.log(this.itemPrice);
      // console.log(res);
      // console.log(this.item);
    });

    this.itemOldPrice = 5.15;
    this.itemNewEffectiveDate = new Date('2017-10-09T13:48:19Z');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

}
