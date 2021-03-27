import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../model/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlaceholderDirective } from 'src/app/service/placeholder.directive';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  user:any;
  
   msg='';
     
   name: string = '';
  password : string = '';
  
  id: number;
  
  isLoggedin = false;
  isLoading = false;
   
  
	error: string;
  register: string;
  private userSubject: BehaviorSubject<User>;
  registerMsg: string;
  add: string;
  sendmail:string;
  imgPath:string;
  
  constructor(private route: ActivatedRoute, private router: Router,private userService: UserService) {

    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }
  public get userValue(): User {
    return this.userSubject.value;
}

  ngOnInit(): void {
    this.sendmail=this.userService.getSendMail();
    this.registerMsg=this.userService.getRegisterMsg();
  }
  loginUser(){
    this.isLoading=true;
    this.userService.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log(data);
        this.isLoading=true;
        localStorage.setItem('user', JSON.stringify(data));
        this.userSubject.next(data);
         let username = data.name, admin='Admin',librarian='librarian';
         this.id = data.id;
         let roleId = data.role.id;
         this.userService.setRoleId(roleId);
         console.log(roleId);
         this.imgPath = data.imagePath;
         console.log(this.imgPath)
         this.userService.setImagePath(this.imgPath);
        if(username == admin){
          console.log(username);
           console.log("admin login");
           this.userService.setMessage(username);
           this.userService.setId(this.id);
           this.router.navigate(['admin/home']);
        }
         else if (username == librarian){
          console.log(username);
          console.log("librarian login");
          this.userService.setId(this.id);
          this.userService.setMessage(username);
           this.router.navigate(['librarian/home']);
        }
         else{
          console.log(username);
          console.log(this.id);
        console.log("response received");
        this.userService.setMessage(username);
        this.userService.setId(this.id);
        this.router.navigate(['user/home']);
        }
        return data;
      },
      error => {console.log("exception occured");
      this.msg=" Invalid UserName Or Password";
      this.isLoading=false;
    }
    )
  }
}
