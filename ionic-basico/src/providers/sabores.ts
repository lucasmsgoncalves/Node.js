import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class Sabores{

  constructor(private http: HttpProvider){

  }

  public getSabores(id : any){
    this.http.url = "http://localhost:3000/sabores/" + id;
    return this.http.get();
  }
}
