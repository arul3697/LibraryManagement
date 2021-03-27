import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  // selectedFile: File;
  // retrievedImage: any;
  // base64Data: any;
  // retrieveResonse: any;
  // message: string;
  // imageName: any;

  name: string='arul';
    author_name: string='arul';
    publisher_name: string='arul';
    contact_number: string='arul';

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  

  id: number;
  file: any;
  constructor(private bookService:BookService,private route: ActivatedRoute,private router:Router) { }

  book :any;
  submitted = false;

  ngOnInit(): void {
    this.book=new Book();
    this.id = this.route.snapshot.params['id'];
    
    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }

  // public onFileChanged(event) {
  //     this.selectedFile = event.target.files[0];
  //   }
   
  save() {
    // console.log(this.selectedFile);
  
    // const file = new FormData();
    // file.append('file', this.selectedFile, this.selectedFile.name);

    // this.bookService
    // .addBook(this.book).subscribe(data => {
    //   console.log(data)
    //   this.book = new Book();
    //   this.gotoList();
    // }, 
    // error => console.log(error));
  }

  // saveBook() {
  //   this.submitted = true;
  //   this.save();    
  // }

//   handleFileInput(files: FileList) {
//     this.file = files.item(0);
// }

  gotoList() {
    this.bookService.setAdd("Book Added Successfully");
    this.router.navigate(['admin/home/viewBook']);
  }
  onBack(){
    this.router.navigate(['admin/home/viewBook']);
  }



  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  saveBook() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.bookService.addBook(this.currentFileUpload,this.name,this.author_name,this.publisher_name,this.contact_number).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }

}
