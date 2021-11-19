import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  arrayList:any[];
  constructor() { }

  ngOnInit(): void {
    this.arrayList = [
      {
        id: Math.random().toString(16).slice(2),
        username:"superAdmin",
        pass:"superAdminPass",
        isLogged:false,
      },
      {
        id: Math.random().toString(16).slice(2),
        username:"admin",
        pass:"adminPass",
        isLogged:false,

      },
      {
        id: Math.random().toString(16).slice(2),
        username:"admin2",
        pass:"adminPass",
        isLogged:false,

      },
      {
        id: Math.random().toString(16).slice(2),
        username:"customer",
        pass:"customerPass",
        isLogged:false,

      },
      {
        id: Math.random().toString(16).slice(2),
        username:"customer2",
        pass:"customerPass",
        isLogged:false,

      },
      {
        id: Math.random().toString(16).slice(2),
        username:"customer3",
        pass:"customerPass",
        isLogged:false,

      },
      {
        id: Math.random().toString(16).slice(2),
        username:"anonymous",
        pass:"anonymousPass",
        isLogged:false,

      },
      {
        id: Math.random().toString(16).slice(2),
        username:"anonymous2",
        pass:"anonymousPass",
        isLogged:false,

      },
      {
        id: Math.random().toString(16).slice(2),
        username:"anonymous3",
        pass:"anonymousPass",
        isLogged:false,

      }
  ]
  }


  deleteUser(id:string){
    debugger;
    this.arrayList = this.arrayList.filter((user) => {
      if(user.id != id){
        return user;
      }
    })
    console.log(this.arrayList)
  }

  addListItem(){
    this.arrayList.push(
      {
        id: Math.random().toString(16).slice(2),
        username:"testUser",
        pass:"testUserPAssNew",
        isLogged:false,
      },
    )
  }

}
