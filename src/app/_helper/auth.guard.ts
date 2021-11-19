import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
       private authService:AuthService
     ) { }

    canActivate(to: ActivatedRouteSnapshot, from: RouterStateSnapshot): boolean {

      debugger;
        const user = this.authService.userValue;

        if(user){

            if(to.data.roles && to.data.roles.indexOf(user.role) === -1){
                this.router.navigate(['']);
                return false;
            }
          return true;
        }


        this.router.navigate([""], {queryParams: { returnUrl :from.url }});
        return false;
    }
}
