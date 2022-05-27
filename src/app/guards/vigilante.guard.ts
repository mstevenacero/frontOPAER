import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor(private router:Router){

  }

  redireTo(pass:boolean){
    console.log("entre a la funcion");
    
    if(pass==true){
      console.log("entramos");
      console.log(pass);
        this.router.navigate(['/dashboard/estadistic'])
       
    }
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user:any = localStorage.getItem('user')
      let  userBoolean:boolean = JSON.parse(user)
      this.redireTo(userBoolean)
    return true;
  }
  
}
