import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Librarian } from 'src/app/model/Librarian';
import { PlaceholderDirective } from 'src/app/service/placeholder.directive';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-librarian-login',
  templateUrl: './librarian-login.component.html',
  styleUrls: ['./librarian-login.component.css']
})
export class LibrarianLoginComponent implements OnInit {

  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  librarian:any;
  
   msg='';
     
   name: string = '';
  password : string = '';
  
  id: number;
  
  isLoggedin = false;
  isLoading = false;
   
  
	error: string;
  register: string;
  private librarianSubject: BehaviorSubject<Librarian>;
  registerMsg: string;
  add: string;
  sendmail:string;
  imgPath:string;
  
  constructor(private route: ActivatedRoute, private router: Router,private userService: UserService) {

    this.librarianSubject = new BehaviorSubject<Librarian>(JSON.parse(localStorage.getItem('user')));
    this.librarian = this.librarianSubject.asObservable();
  }
  public get userValue(): Librarian {
    return this.librarianSubject.value;
}

  ngOnInit(): void {
    this.sendmail=this.userService.getSendMail();
    this.registerMsg=this.userService.getRegisterMsg();
  }
  loginLibrarian(){
    this.isLoading=true;
    this.userService.loginLibrarianFromRemote(this.librarian).subscribe(
      data => {
        console.log(data);
        this.isLoading=true;
        localStorage.setItem('user', JSON.stringify(data));
        this.librarianSubject.next(data);
         let username = data.name, admin='Admin',librarian='librarian';
         this.id = data.id;
         let roleId = data.role.id;
         this.userService.setRoleId(roleId);
         console.log(roleId);
         this.imgPath = data.imagePath;
         console.log(this.imgPath)
         this.userService.setImagePath(this.imgPath);
        // if(username == admin){
        //   console.log(username);
        //    console.log("admin login");
        //    this.userService.setMessage(username);
        //    this.router.navigate(['admin/home']);
        // }
        //  else if (username == librarian){
        //   console.log(username);
        //   console.log("librarian login");
        //   this.userService.setMessage(username);
        //    this.router.navigate(['librarian/home']);
        // }
         //else{
          console.log(username);
          console.log(this.id);
        console.log("response received");
        this.userService.setMessage(username);
        this.userService.setId(this.id);
        this.router.navigate(['librarian/home']);
        //}
        return data;
      },
      error => {console.log("exception occured");
      this.msg=" Invalid LibrarianName Or Password";
      this.isLoading=false;
    }
    )
  }
}

