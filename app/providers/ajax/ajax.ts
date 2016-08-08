import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Ajax provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Ajax {

  constructor(private http: Http, private loadingCtrl: LoadingController) {}

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...',
      duration: 3000
    });
    loading.present();
  }

}

