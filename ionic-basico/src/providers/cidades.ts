import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class Cidades{

  constructor(private http: HttpProvider){

  }

  public getCidades(){
    this.http.url = "http://104.196.102.231/cidades"
    return this.http.get();
  }
}
