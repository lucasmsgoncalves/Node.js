import { Tamanhos } from './../../providers/tamanhos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sabores } from '../../providers/sabores';
import { DeliveryPage } from '../delivery/delivery';
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
  listSabores = [];
  id : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tamanhoProvider : Tamanhos, public saboresProvider : Sabores) {
    this.showTamanhos();
    // this.showSabores();
  }

  showTamanhos(){
    // debugger;
    this.tamanhoProvider.getTamanhos().subscribe(
      (data : any) => {
        this
        this.listTamanhos = data;
        console.log(this.listTamanhos);
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  showSabores(){
    this.saboresProvider.getSabores(this.id).subscribe(
      (data : any) => {
        this.listSabores = data;
        console.log(this.listSabores);
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  public acessDataDelivery(){
    this.navCtrl.push(DeliveryPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
