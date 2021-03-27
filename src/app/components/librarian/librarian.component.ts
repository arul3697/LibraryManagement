import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
  books: any;
  add: string;
  deleteMessage=false;
  delete: string;
  deleteMsg: string;
  
  constructor(private bookService:BookService,private router:Router) {}

  ngOnInit(): void {
    this.add = this.bookService.getAdd();
    this.delete = this.bookService.getDeleteMessage();
    

    this.bookService.getViewBook().subscribe(data =>{
      this.books =data;
      })
  }
  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.deleteMsg="Book Deleted Successfully..!!";
          this.bookService.getViewBook().subscribe(data =>{
            this.books =data
            })
        },
        error => console.log(error));
  }
  updateBook(id: number){
    console.log(id);
    this.router.navigate(['librarian/home/updatebook',id]);
  } 
  gotoList(){
    this.router.navigate(['librarian/home/viewBook']);
  } 
}