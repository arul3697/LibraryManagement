import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  user: User=new User();
  submitted=false;
  error: string;

  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    this.userService
    .resetPassword(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
      this.gotoList();
    }, 
    error => console.log(" Invalid Email Id...!"));
    this.error=" Invalid Email Id...!";
  }

  resetPassword() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.userService.setSendMail("Your Password Send To Your Email..!!");
    this.router.navigate(['login']);
  }

  Back(){
    this.router.navigate(['login']);
  }

}
