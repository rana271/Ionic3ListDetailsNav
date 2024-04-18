import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  items: any[];
  username:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
  }

  ionViewDidLoad() {
    this.username=this.navParams.get('param1');
    console.log('ionViewDidLoad ListPage');
  }
  showDetails(item) {
    this.navCtrl.push(DetailsPage, { item: item });
  }
}
