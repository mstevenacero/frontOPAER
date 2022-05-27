import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
  _dataUser:any
  userData:any
  numberUser=null
  numberSintoms=null

  constructor( private _httpService: RestService,
    private router:Router) { }

  ngOnInit(){
    this.getUsers()
    this.getAlerts()
  }
  getUsers() {
    this._httpService.get('users').subscribe(
      response => {
        if (!response) {
          console.error('Error: de traer los sintomas de usuario');
        } else {
          this._dataUser=response
          //("response de alerta",this._dataUser.data.length);
           this.numberUser = this._dataUser.data.length
           this.userData = this._dataUser.data
        }
        //('se  agrego el usuario');
      }
    );


  }
  getAlerts() {
    this._httpService.get('alerts_users').subscribe(
      response => {
        if (!response) {
          console.error('Error: de traer los sintomas de usuario');
        } else {
          this._dataUser=response
          //("response de alerta",this._dataUser.data.length);
           this.numberSintoms = this._dataUser.data.length

        }
        //('se  agrego el usuario');
      }
    );


  }

  localSend(id:any){
    localStorage.setItem('id',id);
    this.routerClick('dashboard/alerts')

  }
  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }

}
