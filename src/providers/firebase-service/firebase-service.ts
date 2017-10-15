import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {AngularFireDatabase} from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getItems() {
    return this.afd.list('/items/');
  }

  addItem(name) {
    this.afd.list('/items/').push(name);
  }

  removeItem(id) {
    this.afd.list('/items/').remove(id);
  }

}
