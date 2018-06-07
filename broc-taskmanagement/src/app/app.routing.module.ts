import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from './shared/notfound.component';
import { UserComponent } from './user/user.component';
import { TaskListComponent } from './task/tasklist.component';
import { TaskDetailComponent } from './task/taskdetail.component';

const routes: Routes = [
  
    { path: 'tasklist', component: TaskListComponent },
    { path: 'taskdetail', component: TaskDetailComponent },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    
    {path : '', component : NotFoundComponent}
  ];
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }

  