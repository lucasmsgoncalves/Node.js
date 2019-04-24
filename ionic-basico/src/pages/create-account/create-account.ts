import { HomePage } from './../home/home';
import { Create } from './../../providers/create';
import { Toast } from './../../providers/toast';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  public user : any;
  public password : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toats : Toast, public createProvider : Create) {
  }

  public showToast(){
    this.toats.presentToast("Usuário cadastrado já existe!");
  }

  public createUser() {
    this.createProvider.createUserApi(this.user, this.password).subscribe(
      (data : any) => {
        console.log("createUser:",data);
        this.navCtrl.setRoot(HomePage);
      },
      (error : any) => {
        console.log("deu merda",error);
        this.showToast();
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }
}
