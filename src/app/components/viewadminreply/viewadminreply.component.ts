import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-viewadminreply',
  templateUrl: './viewadminreply.component.html',
  styleUrls: ['./viewadminreply.component.css']
})
export class ViewadminreplyComponent implements OnInit {
  viewAdmiReply: any;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getViewAdminReply().subscribe(data =>{
      this.viewAdmiReply =data;
      })
  }

}
