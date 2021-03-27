import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { AppRoutingModule } from './app-routing.module';
import {Router, Routes, RouterModule, ROUTES } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';  
import { MatListModule } from '@angular/material/list';
import { RegisterComponent } from './components/register/register.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminreplyComponent } from './components/adminreply/adminreply.component';
import { LibrarianComponent } from './components/librarian/librarian.component';
import { LibrarianTextBoxComponent } from './components/librarian-text-box/librarian-text-box.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RequestComponent } from './components/request/request.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserComponent } from './components/user/user.component';
import { SidebarModule } from 'ng-sidebar';
import {MatMenuModule} from '@angular/material/menu';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ViewuserrequestComponent } from './components/viewuserrequest/viewuserrequest.component';
import { ViewlibrarianrequestComponent } from './components/viewlibrarianrequest/viewlibrarianrequest.component';
import { ViewadminreplyComponent } from './components/viewadminreply/viewadminreply.component';
import { ViewnotificationComponent } from './components/viewnotification/viewnotification.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ViewReqStatusComponent } from './components/view-req-status/view-req-status.component';
import { ViewFavouriteBookComponent } from './components/view-favourite-book/view-favourite-book.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './service/placeholder.directive';
import { AddLibrarianComponent } from './components/add-librarian/add-librarian.component';
import { UpdateLibrarianComponent } from './components/update-librarian/update-librarian.component';
import { ViewLibrarianListComponent } from './components/view-librarian-list/view-librarian-list.component';
import { LibrarianLoginComponent } from './components/librarian-login/librarian-login.component';
import { CountsComponent } from './components/counts/counts.component';
//import { HttpInterceptorService } from './service/httpInterceptor.service';

//  const routes=[
// ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AddbookComponent,
    AdduserComponent,
    AdminComponent,
    AdminreplyComponent,
    LibrarianComponent,
    LibrarianTextBoxComponent,
    NotificationComponent,
    RequestComponent,
    ResetPasswordComponent,
    UserComponent,
    UpdateuserComponent,
    ViewuserrequestComponent,
    ViewlibrarianrequestComponent,
    ViewadminreplyComponent,
    ViewnotificationComponent,
    ProfilesComponent,
    EditProfileComponent,
    ViewReqStatusComponent,
    ViewFavouriteBookComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    AddLibrarianComponent,
    UpdateLibrarianComponent,
    ViewLibrarianListComponent,
    LibrarianLoginComponent,
    CountsComponent,
  ],
  imports: [
    BrowserModule,SidebarModule.forRoot(),MatMenuModule,MatProgressSpinnerModule,
    AppRoutingModule,MatSidenavModule,MatToolbarModule,MatIconModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,RouterModule, LayoutModule, MatButtonModule, MatListModule,RouterModule
  ],
  providers: [
  //   { provide: HTTP_INTERCEPTORS,
  //  useClass: HttpInterceptorService,
  //   multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
