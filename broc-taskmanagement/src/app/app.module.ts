import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './shared/notfound.component';
import { UserComponent } from './user/user.component';
import { TaskListComponent } from './task/tasklist.component';
import { TaskDetailComponent } from './task/taskdetail.component';
import { ChartComponent } from './chart/chart.component';



import {LoginService} from './services/login.service'
import {GlobalSubscription} from './common/globalsubscription'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    UserComponent,
    TaskListComponent,
    TaskDetailComponent,
    ChartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    GlobalSubscription
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

