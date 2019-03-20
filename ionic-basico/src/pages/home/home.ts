import { ProfilePage } from '../profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../providers/messages';
import { Toast } from '../../providers/toast';
import { Login } from '../../providers/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public exibirConteudo : boolean = true;
  public listaAlunos = [];
  public user : any;
  public password : any;

  constructor(public navCtrl: NavController, public messages : Messages, public toats : Toast, public loginProvider : Login) {

  }

  buttonClick(){
    this.exibirConteudo = !this.exibirConteudo;
  }

  public adicionarAlunos(){
    this.listaAlunos.push({nome : "Aluno A"});
    this.listaAlunos.push({nome : "Aluno B"});
    this.listaAlunos.push({nome : "Aluno C"});
    this.listaAlunos.push({nome : "Aluno D"});
    this.listaAlunos.push({nome : "Aluno E"});
  }

  public limparLista(){
    this.listaAlunos = [];
  }

  public showMessage(){
    this.messages.loadingShow();
  }

  public showToast(){
    this.toats.presentToast("Login ou Senha incorretos!");
  }

  public login() {
    if (this.user === 'admin@senai' && this.password === "1234") {
      
      this.loginProvider.loginApi(this.user, this.password).subscribe(
        (data : any) => {
          console.log(data);
          this.navCtrl.push(ProfilePage);
        },
        (error : any) => {
          console.log(error);
        }
      )
    }
    else {
      this.showToast()
    }
  }
}
