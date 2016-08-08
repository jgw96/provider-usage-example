import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { Ajax } from '../../providers/ajax/ajax';


@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(private navCtrl: NavController, private ajax: Ajax) {
  
  }

  openLoading() {
    this.ajax.showLoading();
  }
}
