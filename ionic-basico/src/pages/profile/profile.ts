import { Tamanhos } from './../../providers/tamanhos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  listTamanhos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tamanhoProvider : Tamanhos) {
    this.showTamanhos();
  }

  showTamanhos(){
    // debugger;
    this.tamanhoProvider.getTamanhos().subscribe(
      (data : any) => {
        this.listTamanhos = data;
        console.log(this.listTamanhos);
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
