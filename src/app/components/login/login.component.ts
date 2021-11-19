import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {  Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userTable:any[]
  constructor(
    private _authService:AuthService,
    private router:Router
  ) { }

  onSubmit(form: any) {
    if(this._authService.login(form.value.username,form.value.password)){
      this.router.navigate(['home'])
    }
    else{
      this.router.navigate([''])
    }
 }

  ngOnInit(): void {

  }

}
