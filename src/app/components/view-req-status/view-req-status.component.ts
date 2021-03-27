import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-req-status',
  templateUrl: './view-req-status.component.html',
  styleUrls: ['./view-req-status.component.css']
})
export class ViewReqStatusComponent implements OnInit {
  viewUserRequest: any;
  username:string='';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.username = this.userService.getMessage();
    console.log(this.username);
    this.userService.getRequestList(this.username).subscribe(data=>{
      this.viewUserRequest =data;  
    })
   }  
  }
