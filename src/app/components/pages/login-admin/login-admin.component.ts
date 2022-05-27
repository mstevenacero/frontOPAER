import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  login={
    name:"",
    password:""
  }
  
  paso:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  singIn(){
    this.paso=true;
    //("login",this.login);
    let name = this.login.name
    let pass = this.login.password
    if(name=="superAdmin" && pass=="Ttgb1010@" ){
      localStorage.setItem("user",JSON.stringify(this.paso))
      let user:any = localStorage.getItem('user')
      console.log(user);
      let  userBoolean = JSON.parse(user)
      this.router.navigateByUrl('dashboard/estadistic')
    }else{
      window.alert("Usuario no existe")
    }
  }

}
