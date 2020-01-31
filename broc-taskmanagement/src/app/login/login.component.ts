import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';
import { User } from '../model/user';
import {GlobalSubscription} from '../common/globalsubscription';
import {GlobalVar} from '../common/globalvar';

import {AccessPermission} from '../model/accesspermission'
// import { Subject } from 'rxjs/subjectsubject';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  constructor(private _loginService:LoginService,private _globalSubscription:GlobalSubscription) {
  }

  username : number
  password : string

  // It will call on login click and will be login with valid creds
  login() : void {
    this._loginService.login(this.username,this.password).subscribe(
      data=>
      {        
      var result =data.filter((user:User)=> user.userId ==this.username && user.password ==this.password )    
      
      if( result.length>0 && result[0].userId== this.username && result[0].password== this.password)
       {  
         //Global class will userName and userId for always. 
        GlobalVar.GloballyAssign(result[0].lastName, result[0].userId);
         var isAdminRole=  result[0].roleTypeId>0?true:false;  
         var acessP;
        if(isAdminRole === true)
         acessP=new AccessPermission(true,isAdminRole,false,isAdminRole);
        else
        acessP=new AccessPermission(true,isAdminRole,true,isAdminRole);
        
        this._globalSubscription.source.next(acessP);
       }
       else
       {
        alert("Invalid credentials");
       }
      }
    )
  }

  
}