import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Librarian } from 'src/app/model/Librarian';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-librarian',
  templateUrl: './update-librarian.component.html',
  styleUrls: ['./update-librarian.component.css']
})
export class UpdateLibrarianComponent implements OnInit {

  id: number;
  
  

  submitted = false;
  librarian:any;


  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.librarian = new Librarian();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getLibrarian(this.id)
      .subscribe(data => {
        console.log(data)
        this.librarian = data;
      }, error => console.log(error));
  }

  saveLibrarian() {
    this.userService.updateLibrarian(this.id, this.librarian)
      .subscribe(data => {
        console.log(data);
        this.librarian = new Librarian();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.saveLibrarian();    
  }

  gotoList() {
    this.userService.setAdd("Librarian Update Successfully..!!")
    this.router.navigate(['admin/home/viewLibrarianList']);
  }
  Back(){
    this.router.navigate(['admin/home/viewLibrarianList']);
  }
}

