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
    console.log("json-create",object);

    return this.http.post(object);
  }
}
