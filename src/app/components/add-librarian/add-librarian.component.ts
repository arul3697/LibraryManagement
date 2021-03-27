import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Librarian } from 'src/app/model/Librarian';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-librarian',
  templateUrl: './add-librarian.component.html',
  styleUrls: ['./add-librarian.component.css']
})
export class AddLibrarianComponent implements OnInit {

  id: number;
  librarian:any;
  userDetails: any;
  password: string;
  username: string;
  email: string;
  contact: string;
  passwordError: any;
  error: string;
  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router) { }

  submitted = false;


  ngOnInit(): void {
 
    this.librarian=new Librarian();
    this.id = this.route.snapshot.params['id'];
    
    this.userService.getLibrarian(this.id)
      .subscribe(data => {
        console.log(data)
        this.librarian = data;
      }, error => console.log(error));
  }

  save() {
    this.userService
    .createLibrarian(this.librarian).subscribe(data => {
      console.log(data)
      this.librarian = new Librarian();
       this.gotoList();
    }, 
    error => console.log(error));
    this.error="Username Or email Or Contact_number is Already used, Try another..!";
   }

   saveLibrarian() {
     let name=this.librarian.name;
    let password=this.librarian.password;
    let confirmpassword = this.librarian.confirm_password;
    let email_id = this.librarian.email_id;
    let contact_number = this.librarian.contact_number;
    if(password != confirmpassword){
      console.log(password);
      this.passwordError="Both Password Mismatched...!!";
      this.router.navigate(['admin/home/addLibrarian']);
    }

    this.userService.librarianDetails(this.librarian).subscribe(
      data => {
      console.log(data)
      console.log(name)
      this.submitted = true;
       this.save();   
      
    }, error => {console.log("Unique Or email Or Contact_number Or Library Name is Already used, Try another..! ");
    this.error="Unique Or email Or Contact_number Or Library Name is Already used, Try another..!";
  }
    ); 
}

  gotoList() {
    this.userService.setAdd("Librarian Added Successfully...!!");
    this.router.navigate(['admin/home/viewLibrarianList']);
  }
  Back(){
    this.router.navigate(['admin/home/viewLibrarianList']);
  }
}