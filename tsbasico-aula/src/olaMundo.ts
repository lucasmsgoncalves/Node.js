import {prompt} from 'inquirer';
import {VpHttp} from './http/vphttp';

export class OlaMundo {

    public getSabores(){
        // console.log('Passou aqui');
        new VpHttp('http://5c64a0b9c969210014a32ed5.mockapi.io/sabores').get().subscribe(
            (data : any) => {
                console.log(data);
            },
            (error : any) => {
                console.log(error);
            }
        );
    }
}