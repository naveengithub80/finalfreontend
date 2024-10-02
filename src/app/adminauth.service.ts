import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }


  authenticate(username:string,password:string){

    if(username=='naveen'&&password=="naveen123"){

      sessionStorage.setItem('username',username);
      return true;
    

    }else{
      return false;
    }

  }





  isUserLoggedIn(){

    console.log("user is in login state")
   let user= sessionStorage.getItem('username');

   return !(user==null)


  }

  logout(){

    console.log('user is logout');
    sessionStorage.removeItem('username');
  }








}
