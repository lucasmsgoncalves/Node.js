import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class Create{

  constructor(private http: HttpProvider){

  }

  public createUserApi(userName : string, password : string ){
    const object = {
      userName : userName,
      password : password
    }
    this.http.url = "http://localhost:3000/create"
    console.log("create-user",object);

    return this.http.post(object);
  }

  public createSaborApi(idTamanho : any, sabor : any, preco : any){
    const object = {
      idTamanho : idTamanho,
      sabor : sabor,
      preco : preco
    }

    this.http.url = "http://localhost:3000/create_sabor"
    console.log("create-sabor",object);

    return this.http.post(object);
  }
}
