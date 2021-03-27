import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User';
import { Observable,Subject } from "rxjs";



import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  add: string;
  delete: string;
  deleteMsg: string;
 
  constructor(private router:Router,private userService:UserService) { }

  usersArray: any[] = [];
  //dtOptions: DataTables.Settings = {}; 
  dtTrigger: Subject<any>= new Subject();
  user : User=new User();
  viewUser:any;
  deleteMessage=false;
  isupdated = false; 

  users:User[];
     
  ngOnInit(): void {
    this.add = this.userService.getAdd();
    this.delete = this.userService.getDeleteMessage();
    
    this.isupdated=false;
    // this.dtOptions = {
    //   pageLength: 6,
    //   stateSave:true,
    //   lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
    //   processing: true
    // };     
    this.userService.getViewUser().subscribe(data =>{
      this.users =data;
        this.dtTrigger.next();
  
      })
    }
    
  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.deleteMsg="User Account Deleted..!!";
          this.userService.getViewUser().subscribe(data =>{
            this.users =data
            })
            // this.gotoList();
        },
        error => console.log(error));
  }
  updateUser(id: number){
    this.router.navigate(['admin/home/updateuser',id]);
  }
  // gotoList(){
  //   this.router.navigate(['admin/home/viewUser']);
  // }
}

  
  


