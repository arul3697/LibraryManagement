import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/Request';
import { BookService } from 'src/app/service/book.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request: Request = new Request();
  submitted=false;
  name: string;
  nameError: string;
  
  constructor(private bookService:BookService,private route: ActivatedRoute,private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    this.name=this.userService.getMessage();
  }
  saveUserRequest(){
    this.bookService
    .saveUserRequest(this.request).subscribe(data => {
      console.log(data)
      this.request = new Request();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  saveRequest(){
    let username=this.request.username;
    console.log(username);
    console.log(this.name);
    let testName = this.name; 
    if(testName == username){
      console.log(testName);
      console.log(username);
      this.submitted = true;
      this.saveUserRequest();  
    } else{
      this.nameError="Invalid UserName...!!";
      this.router.navigate(['user/home/request']);
    }
    // this.submitted = true;
    // this.saveUserRequest();  

  }
  gotoList(){
    this.bookService.setAdd("Request send to Librarian...!!");
    this.router.navigate(['user/home/viewBooks']);
   }
   onBack(){
     this.router.navigate(['user/home']);
   }
}
