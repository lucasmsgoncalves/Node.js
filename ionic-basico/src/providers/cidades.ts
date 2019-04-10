import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class Cidades{

  constructor(private http: HttpProvider){

  }

  public getCidades(){
    this.http.url = "http://localhost:3000/cidades"
    return this.http.get();
  }
}
