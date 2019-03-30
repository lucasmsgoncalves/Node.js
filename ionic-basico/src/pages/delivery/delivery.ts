import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cidades } from '../../providers/cidades';
import { Bairros } from '../../providers/bairros';

/**
 * Generated class for the DeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {
  listCidades = [];
  listBairros = [];
  id : any;
  adress : string;
  number : string;
  complement : string;
  ref : string;
  public showContent;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cityProvider: Cidades, public bairrosProvider : Bairros) {
    this.showCidades();
  }

  showCidades(){
    // debugger;
    this.cityProvider.getCidades().subscribe(
      (data : any) => {
        this.listCidades = data;
        console.log(this.listCidades);
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  showBairros(){
    this.bairrosProvider.getBairros(this.id).subscribe(
      (data : any) => {
        this.listBairros = data;
        console.log(this.listBairros);
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  public clearData(){
    this.adress = "";
    this.number = "";
    this.complement = "";
    this.ref = "";
    this.listBairros = [];
    this.id="";
    this.showContent = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryPage');
  }

}
