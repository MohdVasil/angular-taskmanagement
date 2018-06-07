import { Component,OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import {ISubscription} from "rxjs/Subscription";
import{Router} from '@angular/router';

@Component({
  selector: 'registration-comp',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent  implements OnDestroy
{
  taskName:string="Register"
  subscription: ISubscription;
  userModel:User={
     userId:0,firstName:"",lastName:"",email:"",address:'',phoneNo:0,password:'' ,roleTypeId:0
   }
  constructor(private _userService: UserService,private _router : Router)
  {
    this.userModel.userId=0;
  }
  ngOnInit()
  {
    this.UserDetail();
  }
  UserDetail()
   {    
       this.subscription = this._userService.userDetailSource.subscribe(obj=>
       {  
        var userItem=obj as User;            
          if(userItem != null && userItem != undefined && userItem.userId>0) 
          {   
            this.taskName="Update"; 
            this.userModel.userId=userItem.userId;
            this.userModel.firstName =userItem.firstName;
            this.userModel.lastName=userItem.lastName;
            this.userModel.password=userItem.password;
            this.userModel.address=userItem.address;
            this.userModel.email=userItem.email;            
            this.userModel.phoneNo=userItem.phoneNo;
          }
          else
          {
            this.taskName="Create";   
          }         
        })
    } 
    submitRegistrationForm():void
    { 
      if(this.userModel.userId>0)
      {
        this._userService.saveUser(this.userModel).subscribe(data=>
        {
            alert("User updated successfully");
        });
      }
      else
      {
        this._userService.saveUser(this.userModel).subscribe(data=>
          {
              alert("User created successfully");
          });
      }
    }
    OnBackPage():void
   { 
     if(this.taskName == "Create")
     {
      
      this._router.navigate(['./user']);
     }
     else
     {
      this._router.navigate(['./user']);
     }
   }
    ngOnDestroy() {
      this.subscription.unsubscribe();
      console.log("Destroy RegistrationComponent");
    }
}