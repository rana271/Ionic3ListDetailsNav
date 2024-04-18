import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: any = "";
  password: any = "";
  constructor(public navCtrl: NavController) {

  }
  doLogin(){
    if(this.username==="admin" && this.password==="admin"){
      console.log("Login Success");
      this.navCtrl.push(ListPage,{ param1: this.username });
    }
    else{
      console.log("Login failed...");
      this.navCtrl.setRoot(HomePage);
    }
   
  }
}
