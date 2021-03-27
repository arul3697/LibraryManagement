import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrarianRequest } from 'src/app/model/LibrarianRequest';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-librarian-text-box',
  templateUrl: './librarian-text-box.component.html',
  styleUrls: ['./librarian-text-box.component.css']
})
export class LibrarianTextBoxComponent implements OnInit {

  librequest: LibrarianRequest = new LibrarianRequest();
  submitted=false;

  constructor(private bookService:BookService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  saveLibrarianRequest(){
    this.bookService
    .saveLibrarianRequest(this.librequest).subscribe(data => {
      console.log(data)
      this.librequest = new LibrarianRequest();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  saveRequest(){
    this.submitted = true;
    this.saveLibrarianRequest();  

  }
  gotoList(){
    this.bookService.setAdd("Request Send to Admin..!");
    this.router.navigate(['librarian/home/viewBook']);
   }
}
