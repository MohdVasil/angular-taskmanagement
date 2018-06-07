import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import {MatPaginator,MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import{Router} from '@angular/router';
import { User } from '../model/user';


@Component({
  selector: 'app-user',
  styleUrls: ['user.component.css'],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit ,OnDestroy{

  
  dataSource = new MatTableDataSource<User>();  
  displayedColumns = ['select','userId', 'firstName','lastName','address','phoneNo','email'];
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  
  constructor(private router : Router,private _userService: UserService) {

   }
 
   ngOnInit() {    
     this._userService.getUserList().subscribe(data=>
      {  
      this.dataSource = new MatTableDataSource<User>(data);  
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;       
      });
       
  }

  deleteUser()
  {
    if(this.selection.selected.length>0)
    {
      
      this.selection.selected.forEach(item => {
        var index= this.dataSource.data.indexOf(item);
        if(index>-1)
        {         
          this.dataSource.data.splice(index,1);
          this.dataSource.data.splice
          this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
        }
      });
      this.selection = new SelectionModel<User>(true, []);
      this._userService.deleteUser(this.selection.selected).subscribe((data)=>
        {  
          alert("Selected records deleted successfully.")
        });         
    }
    else
    {
      alert("At least one record would be selected.")
    }
  }
  
  updateUser()
  {    
    if(this.selection.selected.length>0)
    { 
      this.router.navigate(["registration"]).then(value=>
        {           
          if(value === true)
          {
            this._userService.userDetailSource.next(this.selection.selected[0]);
          }
        }
      );      
    }
    else
    {
      alert("At least one record would be selected.")
    }
  }

  createUser()
  {    
    // this.router.navigate(["taskdetail"]);
    this.router.navigate(["registration"]).then(value=>
      {           
        if(value === true)
        {
         var userModel:User={
            userId:0,firstName:"",lastName:"",email:"",address:'',phoneNo:0,password:'' ,roleTypeId:0
          }
          this._userService.userDetailSource.next(userModel);
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
