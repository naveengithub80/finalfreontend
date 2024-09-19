import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerauthService {

  constructor() { }

  authenticate(username:string,password:string){



    if(username=='ravali' && password=='ravali12'){
      sessionStorage.setItem('username',username);
      return true


    }
    else{
      return false
    }

  }
}
