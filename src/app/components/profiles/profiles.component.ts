import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
    id: number;
    name:string='';
    full_name:string='';
    address:string='';
    contact_number:string='';
    email_id:string='';
    updateMsg:string='';
    imagePath : string='';
    profileImage=false;
  user: any;
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.imagePath = this.userService.getImagePath();
    if(this.imagePath == null){
      this.profileImage = false;
    }else {
      this.profileImage = true;
    }
       this.updateMsg = this.userService.getAdd();
       this.id = this.userService.getId();
       console.log(this.id);
    this.userService.getUser(this.id)
       .subscribe(data => {
        console.log(data)
        this.name= data.name;
        this.full_name=data.full_name;
        this.email_id=data.email_id;
        this.contact_number=data.contact_number;
        this.address = data.address;
      }, error => console.log(error));
  }
  editProfile(){
    this.router.navigate(['user/home/editProfile',this.id]);
  }

}
