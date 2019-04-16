import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class Bairros{

  constructor(private http: HttpProvider){

  }

  public getBairros(id : any){
    this.http.url = "http://localhost:3000/bairros/" + id;
    return this.http.get();
  }
}
