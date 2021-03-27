import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-viewnotification',
  templateUrl: './viewnotification.component.html',
  styleUrls: ['./viewnotification.component.css']
})
export class ViewnotificationComponent implements OnInit {
  notification: any;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getViewNotification().subscribe(data=>{
      this.notification=data;
    })
  }

}
