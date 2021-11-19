import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User,Role } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: [User];

  constructor(
    private router: Router,
  ){
    this.users = JSON.parse(localStorage.getItem("users"));
  }



  public get userValue() : User  {
    return this.users.filter((user) => {
      return user.isLogged == true
    })[0];
  }

  public roleBasedUser(role: Role) : User[] {
    debugger;
    return this.users.filter((user) => {
      if(role == Role.Admin){
        if(user.role == Role.Customer){
            return user;
        }
        else if(user.role == Role.Anonymous){
          return user;
        }
        else if(user.role == Role.Admin){
          return user;
        }
        else{
          return null;
        }
      }
      else if(role == Role.SuperAdmin){
        return user;
      }else{
        return null;
      }
    });
  }

  refreshLocalStorage(){
    this.users = JSON.parse(localStorage.getItem("users"));
  }

  login(username:string, password:string): boolean {
    debugger;
    let userNotFound = true;
    let updatedUser:User[] = this.users.filter((user) => {
        if(user.username === username && user.pass === password){
          user.isLogged = true;
          userNotFound = false;
        }
        return user;
    });

    if(userNotFound){
      return false;
    }

    this.updatestorage(updatedUser);
    return true;
  }

  logout(){
    let updatedUser =this.users.filter((user) => {
          if(user.isLogged == true){
            user.isLogged = false;
          }
          return user;
    });
    this.updatestorage(updatedUser);
  }

  updatestorage(users: User[]){
    localStorage.setItem('users',JSON.stringify(users));
  }

}
