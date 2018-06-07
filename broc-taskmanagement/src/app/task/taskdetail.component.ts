import { Component,OnDestroy, ViewChild } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';
import {NgForm} from '@angular/forms';
import {ISubscription} from "rxjs/Subscription";
import { LOCATION_INITIALIZED } from '@angular/common';
import{Router} from '@angular/router';

@Component({
  selector: 'taskdetail-comp',
  templateUrl: './taskdetail.component.html'
})
export class TaskDetailComponent implements OnDestroy{
  
  subscription: ISubscription;
  taskName:string="Create"
  priorityList = [{id:1,priority:"Low"},{id:2,priority:"Medium"},{id:3,priority:"High"}];
  statusList =[{id:1,status:"Open"},{id:2,status:"Close"},{id:2,status:"Reopen"}];
  taskModel = new Task(0,0,"","",0,"",0,"");  
  submitDisabled=false;
  ngOnInit()
  {
    this.TaskDetail();
  }
  constructor(private _taskService: TaskService,private _router : Router) {

   }
   TaskDetail()
   {    
       this.subscription = this._taskService.taskDetailSource.subscribe(obj=>
       {  
        var taskItem=obj as Task;            
          if(taskItem != null && taskItem != undefined && taskItem.id>0) 
          {   
            this.taskName="Update"; 
            this.taskModel.id=taskItem.id;
            this.taskModel.summary =taskItem.summary;
            this.taskModel.userId=taskItem.userId;
            this.taskModel.description=taskItem.description;
            this.taskModel.statusId=taskItem.statusId;            
            this.taskModel.priorityId=taskItem.priorityId;
          }
          else
          {
            this.taskName="Create";   
          }         
        })
    } 
   saveTask()
   {     
      if(this.taskModel.id>0)
      {
        this._taskService.createTask(this.taskModel).subscribe(data=>
        {
            alert("Task updated successfully");
        });
      }
      else
      {
        this._taskService.createTask(this.taskModel).subscribe(data=>
          {
              alert("Task created successfully");
          });
      }
   }
   OnBackPage():void
   {     
    this._router.navigate(['./tasklist']);
   }
   ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

}