import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { AdminReply } from '../model/AdminReply';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user =new User;

  reply = new AdminReply; 
	 
  message:string
 
	name: String;
	password: String;

   private baseUrl = 'http://localhost:8080/api/';
    isAuthenticated: any;
  update: string;
  deleteMessage:string;
  add:string;
  PasswordMismatched: string;
  username: string;
  email_id: string;
  contact_number: string;
  registerMsg: string;
  sendmail: string;
  id: number;
  imgPath:string;
  roleId: number;
   
  constructor(private http: HttpClient) { }

  createUser(user: object):Observable<object>{
   
    return this.http.post(`${this.baseUrl}`+'addOrUpdateUser', user);
  }

  createLibrarian(librarian: object):Observable<object>{
   
    return this.http.post(`${this.baseUrl}`+'addOrUpdateLibrarian', librarian);
  }

  register(user: object):Observable<object>{
   
    return this.http.post(`${this.baseUrl}`+'addOrUpdateUser', user);
  }

  resetPassword(user: object):Observable<object>{
   
    return this.http.post(`${this.baseUrl}`+'resetPassword', user);
  }

  saveReply(reply: object):Observable<object>{
   
    return this.http.post(`${this.baseUrl}`+'saveReply', reply);
  }

  getViewUserRequest(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'viewUserRequest');
  }

  getViewLibrarianRequest(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'viewLibrarianRequest');
  }

  getViewUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'viewUser');
  }

  getViewLibrarian(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'viewLibrarian');
  }

  deleteLibrarian(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteLibrarian/${id}`, { responseType: 'text' });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteUser/${id}`, { responseType: 'text' });
  }

  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}user/${id}`);
  }
  getLibrarian(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}librarian/${id}`);
  }
  getRequestList(username: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}requestList/${username}`);
  }

  getUpdateReqStatus(id: number):Observable<Object> {
    return this.http.get(`${this.baseUrl}updateStatus/${id}`);
  }

  getRejectReqStatus(id: number):Observable<Object>  {
    return this.http.get(`${this.baseUrl}rejectStatus/${id}`);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}updateUser/${id}`, value);
  }

  updateLibrarian(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}updateLibrarian/${id}`, value);
  }

  public loginUserFromRemote(user: object):Observable<any>{
   
    return this.http.post<any>(`${this.baseUrl}`+'auth', user);
  }
 
  public loginLibrarianFromRemote(librarian: object):Observable<any>{
   
    return this.http.post<any>(`${this.baseUrl}`+'librarianAuth', librarian);
  }
 
  public userDetails(user: object):Observable<any>{
   
    return this.http.post<any>(`${this.baseUrl}`+'userDetails', user);
  }

  public librarianDetails(librarian: object):Observable<any>{
   
    return this.http.post<any>(`${this.baseUrl}`+'librarianDetails', librarian);
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8080/api/savefile', data, {
    reportProgress: true,
    responseType: 'text'
    });
    return this.http.request(newRequest);
}

 
    setId(id){
      this.id=id;
    }
    getId(){
      return this.id;
    }
    setRoleId(roleId){
      this.roleId=roleId;
    }
    getRoleId(){
      return this.roleId;
    }
  setMessage(data){
		this.message=data
	}
	getMessage(){
		return this.message;
  }
  setImagePath(imgPath) {
    this.imgPath=imgPath;
  }
  getImagePath(){
    return this.imgPath;
  }

 setAdd(add){
   this.add=add
 }
 getAdd(){
   return this.add
 }
 setSendMail(sendmail){
  this.sendmail=sendmail
}
getSendMail(){
  return this.sendmail
}
 setRegisterMsg(registerMsg){
  this.registerMsg=registerMsg
}
getRegisterMsg(){
  return this.registerMsg
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
setPasswordMismatched(PasswordMismatched){
  this.PasswordMismatched= PasswordMismatched
}
getPasswordMismatched(){
  return this.PasswordMismatched
}
setUserName(username){
  this.username=username
}
getUserName(){
  return this.username
}
setEmailId(email_id){
  this.email_id=email_id
}
getEmailId(){
  return this.email_id
}
setContactNumber(contact_number){
  this.contact_number=contact_number
}
getContactNumber(){
  return this.contact_number
}
}

// authenticate(name: String, password: String) {
// 		return this.http.post(`http://localhost:8080/api/authenticate`, { 
// 			headers: { authorization: this.createBasicAuthToken(name, password) }}).pipe(map((res) => {
// 				this.name = name;
// 				this.password = password;				
// 				this.registerInSession(name, password);
// 		}));
// 	}

// 	createBasicAuthToken(name: String, password: String) {
// 		return 'Basic ' + window.btoa(name + ":" + password)
// 	}
	
// 	registerInSession(name, password) {
// 		sessionStorage.setItem(this.SESSION_KEY, name)
// 	}

// 	logout() {
// 		sessionStorage.removeItem(this.SESSION_KEY);
// 		this.name = null;
// 		this.password = null;
// 	}

// 	isUserLoggedin() {
// 		let user = sessionStorage.getItem(this.SESSION_KEY)
// 		if (user === null) return false
// 		return true
// 	}

// 	getLoggedinUser() {
// 		let user = sessionStorage.getItem(this.SESSION_KEY)
// 		if (user === null) return ''
// 		return user
// 	}
