import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminReply } from 'src/app/model/AdminReply';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-adminreply',
  templateUrl: './adminreply.component.html',
  styleUrls: ['./adminreply.component.css']
})
export class AdminreplyComponent implements OnInit {

  id: number;
  loginName: string='';
 submitted = false;
 

 reply: AdminReply = new AdminReply();

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  saveReply(){
    this.userService
    .saveReply(this.reply).subscribe(data => {
      console.log(data)
      this.reply = new AdminReply();
      this.gotoList();
    }, 
    error => console.log(error));
  }
   adminReplySave(){
    this.submitted = true;
    this.saveReply();  
  }
   gotoList(){
     this.userService.setAdd("Information send to Librarian..!");
    this.router.navigate(['admin/home/viewUser']);
   }
   Back(){
    this.router.navigate(['admin/home/viewUser']);
  }
}
