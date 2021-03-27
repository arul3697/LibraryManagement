import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Librarian } from 'src/app/model/Librarian';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id: number;
  error: string;
  passwordError: string;
  librarian: number;
  library: any;
  constructor(private userService: UserService,private route: ActivatedRoute,private router:Router) { }
  user : User=new User();
  submitted = false;


  ngOnInit(): void {
    this.userService.getViewLibrarian().subscribe(data => {
      console.log(data);
      this.library = data;
    })
  }
  save() {
    this.userService
    .register(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  saveUser() {
    let name=this.user.name;
    let password=this.user.password;
    let confirmpassword = this.user.confirm_password;
    let email_id = this.user.email_id;
    let contact_number = this.user.contact_number;
    if(password != confirmpassword){
      console.log(password);
      this.passwordError="Both Password Mismatched...!!";
      this.router.navigate(['login/register']);
    }

    this.userService.userDetails(this.user).subscribe(
      data => {
      console.log(data)
      console.log(name)
      this.submitted = true;
       this.save();   
    }, error => {console.log("username Or email Or Contact_number is Already used, Try another..! ");
    this.error="Username Or email Or Contact_number is Already used, Try another..!";
  }
    );
  }

  gotoList() {
    this.userService.setRegisterMsg("Registration Successfully...!!");
    this.router.navigate(['login']);
  }
  Back(){
    this.router.navigate(['login']);
  }
}
