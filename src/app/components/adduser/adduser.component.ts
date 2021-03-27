import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/User';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
  id: number;
  user:any;
  userDetails: any;
  password: string;
  username: string;
  email: string;
  contact: string;
  passwordError: any;
  error: string;
  library: any;
  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router) { }

  submitted = false;


  ngOnInit(): void {
    this.userService.getViewLibrarian().subscribe(data => {
      console.log(data);
      this.library = data;
    })
  //  this.password = this.userService.getPasswordMismatched();
  //  this.username = this.userService.getUserName();
  //  this.email =  this.userService.getEmailId();
  //  this.contact = this.userService.getContactNumber();
    this.user=new User();
    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  save() {
    this.userService
    .createUser(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
       this.gotoList();
    }, 
    error => console.log(error));
    this.error="Username Or email Or Contact_number is Already used, Try another..!";
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
      this.router.navigate(['admin/home/adduser']);
    }

    this.userService.userDetails(this.user).subscribe(
      data => {
      console.log(data)
      console.log(name)
      this.submitted = true;
       this.save();   
      // if(data.name == name){
      //   console.log(data.name);
      //   this.username="User Name is Already Takened, Try another...!!";
      // this.router.navigate(['admin/home/adduser']);
      // }
      // if(data.email_id == email_id){
      //   console.log(data.email_id);
      //   this.email="Email Id is Already Takened, Try another...!!";
      // this.router.navigate(['admin/home/adduser']);
      // }
      // if(data.contact_number == contact_number){
      //   console.log(data.contact_number);
      //   this.contactNumber="Contact number is Already Takened, Try another...!!";
      // this.router.navigate(['admin/home/adduser']);
     // }
    }, error => {console.log("username Or email Or Contact_number is Already used, Try another..! ");
    this.error="Username Or email Or Contact_number is Already used, Try another..!";
  }
    )
  //   this.submitted = true;
  //  this.save();    
}

  gotoList() {
    this.userService.setAdd("User Added Successfully...!!");
    this.router.navigate(['admin/home/viewUser']);
  }
  Back(){
    this.router.navigate(['admin/home/viewUser']);
  }
}


