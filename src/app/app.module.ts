import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListingComponent } from './components/listing/listing.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {AuthGuard} from './_helper/auth.guard';
import { EditComponent } from './components/listing/edit/edit.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListingComponent,
    HomeComponent,
    EditComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
