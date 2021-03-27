import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from './app-routing.module';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title: any;
  constructor( private router: Router) {
  }

  ngOnInit(): void {
  }
  handleLogout() {
    // this.userService.logout();
		this.router.navigateByUrl('login');
  }
}
// loginName: string='';
// routes = routes;

// isLoggedin = false;

// loggedinUser: string = '';

//        opened = false;

//        toggleSidebar() {
//          this.opened = !this.opened;
//        }
//        constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,private userService:UserService) {}

// ngOnInit(): void {
//   this.loginName = this.userService.getMessage();
//   // this.isLoggedin = this.userService.isUserLoggedin();
//   // this.loggedinUser = this.userService.getLoggedinUser();

//   // if(!this.isLoggedin) {
//   // 	this.router.navigateByUrl('login');
//   // }
// }
// handleLogout() {
//   // this.userService.logout();
//   this.router.navigateByUrl('login');
// }
// }

