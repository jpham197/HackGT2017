import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NcrApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NcrApiProvider {
  itemPriceURL = 'https://hackgt-api.ncrcloud.com/catalog/2.0.2/item-prices/1.0/snapshot';
  itemsURL = 'https://hackgt-api.ncrcloud.com/catalog/2.0.2/items/1.0/snapshot';
  servicesURL = 'https://hackgt-api.ncrcloud.com/apimanagement/3.1.2-GA/application-services/1.0/find-by-criteria';
  itemURL = 'https://hackgt-api.ncrcloud.com/catalog/2.0.2/items/1.0/';

  headerDict = {
    'authorization': 'Basic L29yZy0xL2FkbWluOkNoYW5nM20zISEtYWRtaW4tb3JnLTE=',
    'cache-control': 'no-cache',
    'nep-organization': '/org-1/',
    'nep-application-key': '8a82859f5ef21870015ef2fa5e5f0000',
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
  };
  header = new Headers(this.headerDict);

  constructor(public http: Http) {
    console.log('Hello NcrapiProvider Provider');
    this.header.set('Access-Control-Allow-Origin', '*');

  }

  getdata(url) {
    return this.http.get(url, {headers: new Headers(this.headerDict)})
      .map(res => res.json());
    // Without this line code works perfectly.
  }

  getItemPrice() {
    return this.getdata(this.itemPriceURL);
  }

  getItems() {
    return this.getdata(this.itemsURL);
  }

  getServices() {
    return this.getdata(this.servicesURL);
  }

  getItem(id: string) {
    return this.getdata(this.itemURL + id);
  }


}
