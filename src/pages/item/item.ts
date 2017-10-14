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
  itemPrice:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ncrApi: NcrApiProvider) {
    this.item = navParams.get('item');
    this.itemName = this.item.shortDescription.values[0].value;
    ncrApi.getItemPrice().subscribe(res => {
      this.itemPrice = res.snapshot[navParams.get('index')].price;
      console.log(res.snapshot[navParams.get('index')].price);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

}
