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
    this.http.url = "http://104.196.102.231/tamanhos"
    return this.http.get();
  } 
}