import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User,Role } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: [User];

  constructor(
    private router: Router,
  ){
    this.users = JSON.parse(localStorage.getItem("users"));
  }


  getUserById(id: string): User {
    return this.users.filter((user) => {
        return user.id == id;
    })[0]
  }

    refreshLocalStorage(){
      debugger;
      this.users = JSON.parse(localStorage.getItem("users"));
    }
  deleteUser(id:string):void {
    let newUser = this.users.filter((user) => {
        return user.id != id;
    })
    this.updateStorage(newUser);
    this.refreshLocalStorage();
  }
  addUser(user: User): void {
    this.users.push(user);
    this.updateStorage(this.users);
  }

  updateUser(user: User): boolean {
    let updatedUser = this.users.map((us) =>{
     if(us.id == user.id){
       return user;
     }
     return us;
   });
   this.updateStorage(updatedUser);
   return true;
  }

    updateStorage(users: User[]){
      localStorage.setItem('users',JSON.stringify(users));
    }

}
