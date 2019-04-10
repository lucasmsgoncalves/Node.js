import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class Tamanhos{

  constructor(private http: HttpProvider){

  }

  public getTamanhos(){
    // const object = {
    //   userName : userName,
    //   password : password
    // }
    this.http.url = "http://localhost:3000/tamanhos"
    return this.http.get();
  } 
}