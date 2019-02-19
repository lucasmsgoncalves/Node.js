// import {prompt} from 'inquirer';
import {VpHttp} from './http/vphttp';

export class Requisicoes {

    public getSabores(){
        // console.log('Passou aqui');
        new VpHttp('http://5c6b29dfe85ff400140854fe.mockapi.io/bairros').get().subscribe(
            (data : any) => {
                console.log(data);
            },
            (error : any) => {
                console.log(error);
            }
        );
    }
} 