import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  @Input() user: User;

   loginName: string='';
  routes = routes;
  imagePath : string='';
  profileImage=false;

  isLoggedin = false;
	
	loggedinUser: string = '';

         opened = false;
  userSubject: any;
  roleId: number;
  library: string;
  id: number;

         toggleSidebar() {
           this.opened = !this.opened;
         }
         constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,private userService:UserService) {}

  ngOnInit(): void {
    this.id = this.userService.getId();
    
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.library = data.libraryName;
        console.log(this.library);
      }, error => console.log(error));

    this.roleId = this.userService.getRoleId();
    this.loginName = this.userService.getMessage();
    this.imagePath = this.userService.getImagePath();
    if(this.imagePath == null){
      this.profileImage = false;
    }else {
      this.profileImage = true;
    }
       console.log(this.profileImage);
  }
  Logout() { 
    localStorage.removeItem('user');
        localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
