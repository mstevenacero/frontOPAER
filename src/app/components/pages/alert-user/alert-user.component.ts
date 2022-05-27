import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-alert-user',
  templateUrl: './alert-user.component.html',
  styleUrls: ['./alert-user.component.css']
})
export class AlertUserComponent implements OnInit {
  id:any
  usersId:any
  dataAlerts:any[]=[]

  constructor(private _httpService:RestService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    //("tipo",typeof(this.id));
   this.getAlertUser(this.id)
  }
  getAlertUser(id:any){
    this._httpService.getOne('alerts_users/alert',id).subscribe(
      response => {
        if (!response) {

          console.error('Error: no se encontro usuario');
        } else {
          this.usersId = response
          //("response",this.usersId.data);
          
          const mapUser  = this.usersId.data.map((item: { createdAt: any; description_alerts: any; symptoms_user: { data: any; }; })=>{

            let dataObjet={
              create:item.createdAt,
              data:item.description_alerts,
              symptons:item.symptoms_user.data
            }
             this.dataAlerts.push(dataObjet)
      
          })
  
          
        }
      }
    );

  }
}
