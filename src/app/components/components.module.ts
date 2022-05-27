import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { AlertUserComponent } from './pages/alert-user/alert-user.component';
import { DiagramComponent } from './pages/diagram/diagram.component';
import { EstadisticComponent } from './pages/estadistic/estadistic.component';
import { PolarComponent } from './pages/polar/polar.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    AlertUserComponent,
    DiagramComponent,
    EstadisticComponent,
    PolarComponent,
    LoginAdminComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule ,
    CommonModule,
    ComponentsRoutingModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
