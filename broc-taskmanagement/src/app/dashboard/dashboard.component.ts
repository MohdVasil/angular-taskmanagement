import { Component } from '@angular/core';
import {GlobalSubscription} from '../common/globalsubscription'
import {ISubscription} from "rxjs/Subscription";
import {AccessPermission} from '../model/accesspermission'
import{Router} from '@angular/router'
import {GlobalVar} from '../common/globalvar';

@Component({
  selector: 'dashboard-comp',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent {
    userType:string="";
    subscription: ISubscription;
    isTaskListVisible : boolean = false;
    isUserListVisible: boolean  = false;
    isLoginSucces: boolean =false;
    accessP: AccessPermission;
    constructor(private router : Router,private _globalSubscription:GlobalSubscription)
    {

    }
    ngOnInit()
     {
      this.GlobalSubscription();
     }
     logOut()
     {
      this.isTaskListVisible = this.isUserListVisible=this.isLoginSucces=false;
      this.userType="";
     }    

     //Subscription for enable or disable at tool bar
    GlobalSubscription()
    {     
        this.subscription = this._globalSubscription.source.subscribe(obj=>
        {          
          if(obj != null && obj != undefined) 
          {
            this.accessP =obj as AccessPermission;
            if(this.accessP != null && this.accessP != undefined)
            {
              if(this.accessP.IsAdmin == true)
              {
                this.userType="UserId :"+GlobalVar.userId + "(Admin)";
                this.router.navigate(["user"]);
                this.isUserListVisible =this.accessP.IsUserListVisible;
              }
              else
              {
                this.userType="UserId :"+GlobalVar.userId + "(User)";
                this.router.navigate(["tasklist"]);
                this.isTaskListVisible =this.accessP.IsTaskListVisible;             
              }
              this.isLoginSucces=this.accessP.IsLoginSuccess;
          }
        }
        })
    }
  
}