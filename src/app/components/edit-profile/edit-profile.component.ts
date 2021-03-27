import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;


  imagePath:boolean;

  user: any;
    id:number;
  submitted=false;
  constructor(private route:ActivatedRoute , private userService:UserService,private router:Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        let imgPath = data.imagePath;
        console.log(imgPath);
        this.userService.setImagePath(imgPath);
        if(imgPath == null){
          this.imagePath=false;
        }else{
          this.imagePath=true;
        }
        this.user = data;
      }, error => console.log(error));
  }
  saveUser() {
    this.userService.updateUser(this.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.saveUser();    
  }
  gotoList() {
    this.userService.setAdd("Profile Update Successfully..!!")
    this.router.navigate(['user/home/profile']);
  }
  onBack(){
    this.router.navigate(['user/home']);
  }
 

   //Gets called when the user selects an image
   public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    console.log(this.selectedFile);

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.httpClient.post('http://localhost:8080/api/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    getImage() {
    this.httpClient.get('http://localhost:8080/api/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

}
