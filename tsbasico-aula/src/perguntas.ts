import { prompt } from 'inquirer';

export class Perguntas {
    public asks(){
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
        )
    }
}