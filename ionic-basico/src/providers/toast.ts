import { Injectable, COMPILER_OPTIONS } from '@angular/core';
// import { LoadingController, Loading } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Injectable()
export class Toast{

  constructor(public toastCtrl : ToastController){

  }

  public presentToast(mensagem : string, tempo : number = 1000){

  //   let options = {
  //     message : mensagem,
  //     duration : tempo
  //   }

  //   let toast = this.toastCtrl.create(options);

  //   toast.present();
  // }

    this.toastCtrl.create({
      message : mensagem,
      duration : tempo
    }).present();
  }
}
