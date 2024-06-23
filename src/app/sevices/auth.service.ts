import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor() { }

  login(username:string, password:string): boolean {
    if(username=="yanez" && password=="12345"){
      sessionStorage.setItem('currentUser', "Omar Y.")
      return true;
    }
    return false;
  }

  logOut():void{
    sessionStorage.removeItem('currentUser');
  }

  isLoggedIn():boolean{
    return !!sessionStorage.getItem('currentUser');
  }
  
}
