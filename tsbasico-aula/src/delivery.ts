import { prompt } from 'inquirer';

export class Delivery {

    private vdadosPedido : any = null;
    private vdadosEntrega : any = null;
    private vOpcao : any = 0;
    
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
                    choices: ['PEQUENA', 'MÉDIA', 'GRANDE', 'EXTRA GRANDE']
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
                    choices: ['CALABRESA', 'BACON', 'CAMARÃO', 'PORTUGUESA', 'CHOCOLATE']
                    
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
                    type: 'input',
                    message: 'Informe a cidade:\n'
                },
                {
                    name: 'bairro',
                    type: 'input',
                    message: 'Informe o bairro:\n'
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
        console.log("INFORMAÇÕES DO PEDIDO\n\n");
        console.log('CLIENTE: ' + this.vdadosPedido.name);
        console.log('TELEFONE: ' + this.vdadosPedido.phone);
        console.log('TAMANHO DA PIZZA: ' + this.vdadosPedido.length);
        console.log('QUANTIDADE: ' + this.vdadosPedido.quantity);
        console.log('SABOR: ' + this.vdadosPedido.sabores);

        if (this.vdadosEntrega !== null) {

            console.log('ENDEREÇO DE ENTREGA\n\n');
            console.log('CIDADE: ' + this.vdadosEntrega.cidade);
            console.log('RUA: ' + this.vdadosEntrega.rua);
            console.log('BAIRRO: ' + this.vdadosEntrega.bairro);
            console.log('NÚMERO: ' + this.vdadosEntrega.numero);
            console.log('COMPLEMENTO: ' + this.vdadosEntrega.complemento);
        }

    }
    
}