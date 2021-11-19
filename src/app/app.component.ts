import { Component,OnInit } from '@angular/core';
import { User,Role } from "./_models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   title = 'fdsight';


    users: User[] = [
        {
          id: Math.random().toString(16).slice(2),
          username:"superAdmin",
          pass:"superAdminPass",
          role:Role.SuperAdmin,
          isLogged:false,
        },
        {
          id: Math.random().toString(16).slice(2),
          username:"admin",
          pass:"adminPass",
          role:Role.Admin,
          isLogged:false,

        },
        {
          id: Math.random().toString(16).slice(2),
          username:"admin2",
          pass:"adminPass",
          role:Role.Admin,
          isLogged:false,

        },
        {
          id: Math.random().toString(16).slice(2),
          username:"customer",
          pass:"customerPass",
          role:Role.Customer,
          isLogged:false,

        },
        {
          id: Math.random().toString(16).slice(2),
          username:"customer2",
          pass:"customerPass",
          role:Role.Customer,
          isLogged:false,

        },
        {
          id: Math.random().toString(16).slice(2),
          username:"customer3",
          pass:"customerPass",
          role:Role.Customer,
          isLogged:false,

        },
        {
          id: Math.random().toString(16).slice(2),
          username:"anonymous",
          pass:"anonymousPass",
          role:Role.Anonymous,
          isLogged:false,

        },
        {
          id: Math.random().toString(16).slice(2),
          username:"anonymous2",
          pass:"anonymousPass",
          role:Role.Anonymous,
          isLogged:false,

        },
        {
          id: Math.random().toString(16).slice(2),
          username:"anonymous3",
          pass:"anonymousPass",
          role:Role.Anonymous,
          isLogged:false,

        }

    ];


    ngOnInit(){
      localStorage.setItem("users",JSON.stringify(this.users));
    }
}
