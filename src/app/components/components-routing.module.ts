import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { DiagramComponent } from './pages/diagram/diagram.component';
import { PolarComponent } from './pages/polar/polar.component';
import { AlertUserComponent } from './pages/alert-user/alert-user.component';
import { EstadisticComponent } from './pages/estadistic/estadistic.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { VigilanteGuard } from '../guards/vigilante.guard';


const routes: Routes = [
  {
    path: '', children: [
      { path: 'admin', component: AdminComponent },
      { path: 'estadistic', component: EstadisticComponent },
      { path: 'diagram', component: DiagramComponent },
      { path: 'polar', component: PolarComponent },
      { path: 'alerts', component: AlertUserComponent },
      { path: 'login', component: LoginAdminComponent},
  

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsRoutingModule { }
