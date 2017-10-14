import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NcrapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetItemPricesProvider {
  transURL = 'https://hackgt-api.ncrcloud.com/transaction-document/2.0.0-M3/transaction-documents/2.0/4615160b-ffeb-4486-8764-e86ed84254af';
  headerDict = {
    'authorization': 'Basic L29yZy0xL2FkbWluOkNoYW5nM20zISEtYWRtaW4tb3JnLTE=',
    'cache-control': 'no-cache',
    'nep-organization': '/org-1/',
    'nep-application-key': '8a82859f5ef21870015ef2fa5e5f0000',
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, /',
  };
  header = new Headers(this.headerDict);

  constructor(public http: Http) {
    console.log('Hello NcrapiProvider Provider');
    this.header.set('Access-Control-Allow-Origin', '*');

  }

  getdata() {
    return this.http.get(this.transURL, {headers: new Headers(this.headerDict)})
      .map(res => res.json());
  }

}