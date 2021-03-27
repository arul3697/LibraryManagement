import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-favourite-book',
  templateUrl: './view-favourite-book.component.html',
  styleUrls: ['./view-favourite-book.component.css']
})
export class ViewFavouriteBookComponent implements OnInit {

   uname:string='';
  viewFavouriteBook: any;
  constructor(private userService:UserService,private bookService:BookService) { }

  ngOnInit(): void {
    this.uname = this.userService.getMessage();

   this.bookService.getFavouriteBookList(this.uname).subscribe(data=>{
        this.viewFavouriteBook = data;
        console.log(data);
   },error => console.log(error));
  }
  deleteFavouriteBook(id:number){
    if(confirm("Are you sure to delete ")) {
      this.bookService.deleteFavouriteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.bookService.getFavouriteBookList(this.uname).subscribe(data=>{
            this.viewFavouriteBook = data;
          });
            },
            error => console.log(error));
     }
    }
  }
