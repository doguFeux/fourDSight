import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { User } from "../../_models";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  userList: User[];

  constructor(private _authService:AuthService, private _userService:UserService) {
    this.getUserList();
   }

   deleteUser(id){
     this._userService.deleteUser(id);
     this.getUserList();
   }

   getUserList(){
     debugger;
     this._authService.refreshLocalStorage()
     this._userService.refreshLocalStorage()
     var currentUser = this._authService.userValue;
     this.userList = this._authService.roleBasedUser(currentUser.role);
   }

  ngOnInit(): void {


  }

}
