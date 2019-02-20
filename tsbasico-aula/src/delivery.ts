import { prompt } from 'inquirer';
import {VpHttp} from './http/vphttp';

export class Delivery {

    private vdadosPedido : any = null;
    private vdadosEntrega : any = null;
    private vOpcao : any = null;
    private sabores : any = [];
    private tamanhos : any = [];
    private cidades : any = [];
    private bairros : any = [];
    
    public getSabores(){
        // console.log('Passou aqui');
        new VpHttp('http://5c6b29dfe85ff400140854fe.mockapi.io/sabores').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                // this.sabores = element.Sabor;
                this.sabores.push(element.Sabor);
                console.log(this.sabores); 
                });
                this.getTamanhos();
            },
            (error : any) => {
                console.log(error);
            }
        );
    }

    public getTamanhos(){
        new VpHttp('http://5c6b29dfe85ff400140854fe.mockapi.io/tamanhos').get().subscribe(
            (data : any) => { 
                data.forEach((element : any) => {
                    this.tamanhos.push(element.Tamanho);
                    //this.tamanhos = element.Tamanho;
                    console.log(this.tamanhos); 
                });
                this.getCidades();
            },
            (error : any) => {
                console.log(error);
            }
        );
    }

    public getCidades(){
        new VpHttp('http://5c6b29dfe85ff400140854fe.mockapi.io/cidades').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                    this.cidades.push(element.Cidade);
                    // this.cidades = element.Cidade;
                    console.log(this.cidades); 
                });
                this.getBairros();
            },
            (error : any) => {
                console.log(error);
            }
        );
    }

    public getBairros(){
        new VpHttp('http://5c6b29dfe85ff400140854fe.mockapi.io/bairros').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                    this.bairros.push(element.Bairro);
                    // this.bairros = element.Bairro;
                    console.log(this.bairros); 
                });
                this.fazerPedido();
            },
            (error : any) => {
                console.log(error);
            }
        );
    }

    public fazerPedido(){
        prompt (
            [
                {
                    name: 'desejo',
                    type: 'list',
                    message: 'DESEJA PEDIR UMA PIZZA?\n',
                    choices: ['SIM', 'NÃO']
                }
            ]
        ).then (
            (respostas : any) => {
                this.vOpcao = respostas
                if (respostas.desejo === 'SIM') {
                    this.dadosPedido();
                }
                else {
                    console.log("QUE PENA!\n");
                    console.log("ATÉ MAIS!\n");   
                }
            }
        )
    }

    private dadosPedido(){

        console.log('Passou no método dadosPedido();');
        console.log(this.tamanhos);
        prompt (
            [
                {
                    name: 'name',
                    type: 'input',
                    message: 'Qual o seu nome?\n',
                },
                {
                    name: 'phone',
                    type: 'input',
                    message: 'Qual o seu telefone?\n',
                },
                {
                    name: 'length',
                    type: 'list',
                    message: 'Qual o tamanho da Pizza?\n',
                    choices: this.tamanhos
                },
                {
                    name: 'quantity',
                    type: 'input',
                    message: 'Quantas pizzas você deseja?\n'
                },
                {
                    name: 'sabores',
                    type: 'list',
                    message: 'Escolha 1 sabor listado abaixo\n',
                    choices: this.sabores
                    
                },
                {
                    name: 'delivery',
                    type: 'list',
                    message: 'É para entrega?\n',
                    choices: ['SIM', 'NÃO']
                }
            ]
        ).then (
            (respostas : any) => {
                this.vdadosPedido = respostas;

                if(respostas.delivery === 'SIM'){
                    this.dadosEntrega();
                }
                else {
                    this.imprimirExtrato();
                    console.log("\nCLIENTE IRÁ RETIRAR PEDIDO NO BALCÃO!");
                }
            }
        )
    }

    private dadosEntrega() {
        prompt(
            [
                {
                    name: 'rua',
                    type: 'input',
                    message: 'Informe a rua onde você mora:\n'
                },
                {
                    name: 'cidade',
                    type: 'list',
                    message: 'Qual dessas cidades você mora?',
                    choices: this.cidades
                },
                {
                    name: 'bairro',
                    type: 'list',
                    message: 'Em qual desses bairros?',
                    choices: this.bairros
                },
                {
                    name: 'numero',
                    type: 'input',
                    message: 'Informe o número:\n'
                },
                {
                    name: 'complemento',
                    type: 'input',
                    message: 'Complemento:\n'
                },
                
            ]
        ).then(
                (respostas : any) => {
                    this.vdadosEntrega = respostas;
                    this.imprimirExtrato();
                }
            );
    }

    private imprimirExtrato() {
        console.log("INFORMAÇÕES DO PEDIDO\n");
        console.log('CLIENTE: ' + this.vdadosPedido.name);
        console.log('TELEFONE: ' + this.vdadosPedido.phone);
        console.log('TAMANHO DA PIZZA: ' + this.vdadosPedido.length);
        console.log('QUANTIDADE: ' + this.vdadosPedido.quantity);
        console.log('SABOR: ' + this.vdadosPedido.sabores +'\n\n');

        if (this.vdadosEntrega !== null) {

            console.log('ENDEREÇO DE ENTREGA\n');
            console.log('CIDADE: ' + this.vdadosEntrega.cidade);
            console.log('RUA: ' + this.vdadosEntrega.rua);
            console.log('BAIRRO: ' + this.vdadosEntrega.bairro);
            console.log('NÚMERO: ' + this.vdadosEntrega.numero);
            console.log('COMPLEMENTO: ' + this.vdadosEntrega.complemento);
        }

    }
    
}