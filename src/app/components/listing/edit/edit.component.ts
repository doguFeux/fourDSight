import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../../../services/user.service';
import { User,Role } from "../../../_models";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  header:string="";
  userId:any="";
  user: User = {
    id: Math.random().toString(16).slice(2),
    username:"",
    pass:"",
    role:Role.Admin,
    isLogged:false,
  }
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    debugger;
    this.userId = this._activatedRoute.snapshot.params.id;

    if(this.userId == 0){

      this.header="Add User";

    }else{

      this.header ="Update User";
      let currentUser: User = this._userService.getUserById(this.userId);
      this.user = {...currentUser}
    }
  }

  onSubmit(form: any) {
    debugger;
    if(this.userId == 0){
      this._userService.addUser(this.user);

    }else{
      this._userService.updateUser(this.user);
    }
    this.router.navigate(['/listing']);

 }


}
