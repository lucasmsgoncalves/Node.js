import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class Sabores{

  constructor(private http: HttpProvider){

  }

  public getSabores(id : any){
    this.http.url = "http://104.196.102.231/sabores/" + id;
    return this.http.get();
  }
}
