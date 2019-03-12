import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../providers/messages';
import { Toast } from '../../providers/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public exibirConteudo : boolean = true;
  public listaAlunos = [];

  constructor(public navCtrl: NavController, public messages : Messages, public toats : Toast) {

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
    this.toats.presentToast("Funcionou");
  }
}
