import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from 'src/app/model/Notification';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notification: Notification = new Notification();
  submitted=false;

  constructor(private bookService:BookService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  saveLibrarianNotification(){
    this.bookService
    .saveNotification(this.notification).subscribe(data => {
      console.log(data)
      this.notification = new Notification();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  saveNotification(){
    this.submitted = true;
    this.saveLibrarianNotification();  

  }
  gotoList(){
    this.bookService.setAdd("Notification Send to Users...!!");
    this.router.navigate(['librarian/home/viewBook']);
   }

}
