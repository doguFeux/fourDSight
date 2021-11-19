import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListingComponent } from './components/listing/listing.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/listing/edit/edit.component';
import {AuthGuard} from './_helper/auth.guard';
import {Role} from './_models';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuard],
    data:{
      roles:[
        Role.Admin,
        Role.SuperAdmin,
        Role.Customer
      ]
    }

  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'listing',
    component:ListingComponent,
    canActivate: [AuthGuard],
    data:{
      roles:[
        Role.Admin,
        Role.SuperAdmin
      ]
    }
  },
  {
    path:'listing/edit/:id',
    component:EditComponent,
    canActivate: [AuthGuard],
    data:{
      roles:[
        Role.Admin,
        Role.SuperAdmin
      ]
    }
  },
  {
    path:'listing/add/:id',
    component:EditComponent,
    canActivate: [AuthGuard],
    data:{
      roles:[
        Role.Admin,
        Role.SuperAdmin
      ]
    }
  },
  {
    path:'test',
    component:TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
