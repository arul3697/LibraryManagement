import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  private baseUrl = 'http://localhost:8080/api/';
  add: string;
  update: string;
  deleteMessage: string;
 
constructor(private http: HttpClient) { }

// addBook(book: object):Observable<object>{
   
//   return this.http.post(`${this.baseUrl}`+'addbook', book);
// }

addBook(file: File,name:string,author_name:string,publisher_name:string,contact_number:string): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();

  formdata.append('file', file);

  const req = new HttpRequest('POST', `${this.baseUrl}addbook/${name}/${author_name}/${publisher_name}/${contact_number}`, formdata, {
    reportProgress: true,
    responseType: 'text'
  });

  return this.http.request(req);
}


addFavourite(bookName:string,uname:string):Observable<object>{
   
  return this.http.post(`${this.baseUrl}addFavourite/${bookName}/${uname}`,{ responseType: 'text' });
}

// addBook( file: File , id : number,name: String,author_name: String,publisher_name: String,contact_number: String) : Observable<any>  
// {  
//   let url = this.baseUrl + "addbook/" + id +name +author_name +publisher_name +contact_number;  

//   const formdata: FormData = new FormData();  
  
//   formdata.append('file', file);  
 
//   return this.http.post(url , formdata);  
// }  

saveLibrarianRequest(librequest: object):Observable<object>{
   
  return this.http.post(`${this.baseUrl}`+'librarianRequest', librequest);
}

saveNotification(notification: object):Observable<object>{
   
  return this.http.post(`${this.baseUrl}`+'addNotification', notification);
}

saveUserRequest(request: object):Observable<object>{
   
  return this.http.post(`${this.baseUrl}`+'addRequest', request);
}


getViewBook(): Observable<any> {
  return this.http.get(`${this.baseUrl}`+'viewBook');
}

getViewAdminReply(): Observable<any> {
  return this.http.get(`${this.baseUrl}`+'viewAdminReply');
}

getViewNotification(): Observable<any> {
  return this.http.get(`${this.baseUrl}`+'viewNotification');
}

deleteBook(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}deleteBook/${id}`, { responseType: 'text' });
}

deleteFavouriteBook(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}deleteFavouriteBook/${id}`, { responseType: 'text' });
}

getBook(id: number): Observable<Object> {
  return this.http.get(`${this.baseUrl}book/${id}`);
}
getFavouriteBookList(uname: string) {
  return this.http.get(`${this.baseUrl}viewFavouriteBookList/${uname}`);
}

updateBook(id: number, value: any): Observable<Object> {
  return this.http.post(`${this.baseUrl}updateBook/${id}`, value);
}

setAdd(add){
  this.add=add
}
getAdd(){
  return this.add
}
setUpdate(update){
  this.update=update
}
getUpdate(){
  return this.update
}
setDeleteMessage(deleteMessage){
 this.deleteMessage=deleteMessage
}
getDeleteMessage(){
 return this.deleteMessage
}
}
