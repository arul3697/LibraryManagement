import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Librarian } from 'src/app/model/Librarian';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-librarian-list',
  templateUrl: './view-librarian-list.component.html',
  styleUrls: ['./view-librarian-list.component.css']
})
export class ViewLibrarianListComponent implements OnInit {
  add: string;
  delete: string;
  deleteMsg: string;
  librarians: any;
 
  constructor(private router:Router,private userService:UserService) { }

  librarian : Librarian=new Librarian();
  viewLibrarian:any;
  deleteMessage=false;
  isupdated = false; 
     
  ngOnInit(): void {
    this.add = this.userService.getAdd();
    this.delete = this.userService.getDeleteMessage();
    
    this.isupdated=false;

    this.userService.getViewLibrarian().subscribe(data =>{

        this.librarians =data;
     
      })
    }
    
    deleteLibrarian(id: number) {
      if(confirm("Are you sure to delete ")) {
    this.userService.deleteLibrarian(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.deleteMsg="Librarian Account Deleted..!!";
          this.userService.getViewLibrarian().subscribe(data =>{
            this.librarians =data
            })
        },
        error => console.log(error));
  }
}
  updateLibrarian(id: number){
    this.router.navigate(['admin/home/updateLibrarian',id]);
  }
}
