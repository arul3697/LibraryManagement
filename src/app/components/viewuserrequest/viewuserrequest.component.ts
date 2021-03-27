import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-viewuserrequest',
  templateUrl: './viewuserrequest.component.html',
  styleUrls: ['./viewuserrequest.component.css']
})
export class ViewuserrequestComponent implements OnInit {
  viewUserRequest: any;
  id:number;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getViewUserRequest().subscribe(data =>{
      this.viewUserRequest =data;
  
      })
  }
  updateStatus(id:number){
    console.log(id);         
         this.userService.getUpdateReqStatus(id)
          .subscribe(data => {
             console.log(data)
             this.goList();
          }, error => console.log(error));
  } 
  rejectStatus(id:number){
    console.log(id);         
         this.userService.getRejectReqStatus(id)
          .subscribe(data => {
             console.log(data)
             this.goList();
          }, error => console.log(error));
  } 
  goList(){
      this.router.navigate(['admin/home']);
  } 
}
