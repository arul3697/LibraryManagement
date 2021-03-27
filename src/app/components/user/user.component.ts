import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import {UserService} from '../../service/user.service'
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { routes } from 'src/app/app-routing.module';
import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  books: any;
  downloadMessage: boolean;
  add: string;
  bookName:string='';
  uname:string='';
   
      constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,private bookService:BookService,private userService:UserService) {}

  ngOnInit(): void {
   this.add = this.bookService.getAdd();
    this.bookService.getViewBook().subscribe(data =>{
      this.books =data;
      })
  }
  // download(id: number) {
  //   this.bookService.download(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.downloadMessage=true;
  //         this.bookService.getViewBook().subscribe(data =>{
  //           this.books =data
  //           })
  //       },
  //       error => console.log(error));
  // }
  favourite(id: number){
    this.bookService.getBook(id)
    .subscribe(data => {
      console.log(data)
      this.bookName = data.name;
      console.log(this.bookName);
      this.addFavourite();
    }, error => console.log(error));
}

addFavourite(){
  this.uname = this.userService.getMessage();
  console.log(this.uname);
  this.bookService
  .addFavourite(this.bookName,this.uname).subscribe(data => {
    console.log(data)
  }, 
  error => console.log(error));
}
}




