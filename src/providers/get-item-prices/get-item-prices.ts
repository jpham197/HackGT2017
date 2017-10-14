import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetItemPricesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetItemPricesProvider {

  constructor(public http: Http) {
    console.log('Hello GetItemPricesProvider Provider');
  }

  // transURL = 'https://hackgt-api.ncrcloud.com/transaction-document/2.0.0-M3/transaction-documents/2.0/4615160b-ffeb-4486-8764-e86ed84254af';
  transURL = 'https://hackgt-api.ncrcloud.com/catalog/2.0.2/item-prices/1.0/snapshot'
  headerDict = {
    'authorization': 'Basic L29yZy0xL2FkbWluOkNoYW5nM20zISEtYWRtaW4tb3JnLTE=',
    'cache-control': 'no-cache',
    'nep-organization': '/org-1/',
    'nep-application-key': '8a82859f5ef21870015ef2fa5e5f0000',
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, /'
  };

  header: RequestOptionsArgs = new RequestOptions({
    headers: new Headers(this.headerDict)
  });

  getdata() {
    return this.http.get(this.transURL, this.header)
      .map(res => res.json());
  }

}
