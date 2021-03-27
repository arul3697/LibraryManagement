import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-viewlibrarianrequest',
  templateUrl: './viewlibrarianrequest.component.html',
  styleUrls: ['./viewlibrarianrequest.component.css']
})
export class ViewlibrarianrequestComponent implements OnInit {
  viewLibrarianRequest: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getViewLibrarianRequest().subscribe(data=>{
      this.viewLibrarianRequest=data;
    })
  }

}
