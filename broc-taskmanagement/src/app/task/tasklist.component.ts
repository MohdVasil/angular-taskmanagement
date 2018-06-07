import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import{ContentModelDialog} from '../modeldialog/contentmodeldialog'
import { TaskService } from '../services/task.service';
import {MatPaginator,MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Task } from '../model/task';
import{Router} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Subject } from 'rxjs/subject';
@Component({
  selector: 'task-comp',
  styleUrls: ['task.component.css'],
  templateUrl: './tasklist.component.html'
})
export class TaskListComponent implements OnInit,OnDestroy {

  dataSource = new MatTableDataSource<Task>();  
  displayedColumns = ['select','userId', 'summary','description','priorityId','statusId'];
  selection = new SelectionModel<Task>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public dialog: MatDialog,private router : Router,private _taskService: TaskService) {

   }
 
  ngOnInit() {
     this._taskService.getTaskList().subscribe(data=>
      {  
      this.dataSource = new MatTableDataSource<Task>(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;         
      });      
  }

  deleteTask()
  {
    if(this.selection.selected.length>0)
    {
      
      this.selection.selected.forEach(item => {
        var index= this.dataSource.data.indexOf(item);
        if(index>-1)
        {         
          this.dataSource.data.splice(index,1);
          this.dataSource.data.splice
          this.dataSource = new MatTableDataSource<Task>(this.dataSource.data);
        }
      });
      this.selection = new SelectionModel<Task>(true, []);
      alert("Selected records deleted successfully.")
    }
    else
    {
      alert("At least one record would be selected.")
    }
  }
  
  updateTask()
  {
    if(this.selection.selected.length>0)
    { 
      this.router.navigate(["taskdetail"]).then(value=>
        {           
          if(value === true)
          {
           this._taskService.taskDetailSource.next(this.selection.selected[0]);
          }
        }
      );      
    }
    else
    {
      alert("At least one record would be selected.")
    }
  }

  createTask()
  {    
    // this.router.navigate(["taskdetail"]);
    this.router.navigate(["taskdetail"]).then(value=>
      {           
        if(value === true)
        {
         this._taskService.taskDetailSource.next(new Task(0,0,"","",0,"",0,""));
        }
      }
    ); 
  }

   
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDialog() {
    this.dialog.open(ContentModelDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

  isAllSelected() {  
    const numSelected = this.selection.selected.length;    
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ngOnDestroy() {
    
  }

}
