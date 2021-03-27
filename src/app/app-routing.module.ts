import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AdminreplyComponent } from './components/adminreply/adminreply.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LibrarianComponent } from './components/librarian/librarian.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestComponent } from './components/request/request.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserComponent } from './components/user/user.component';
import { LibrarianTextBoxComponent } from './components/librarian-text-box/librarian-text-box.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ViewuserrequestComponent } from './components/viewuserrequest/viewuserrequest.component';
import { ViewlibrarianrequestComponent } from './components/viewlibrarianrequest/viewlibrarianrequest.component';
import { ViewadminreplyComponent } from './components/viewadminreply/viewadminreply.component';
import { ViewnotificationComponent } from './components/viewnotification/viewnotification.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ViewReqStatusComponent } from './components/view-req-status/view-req-status.component';
import { ViewFavouriteBookComponent } from './components/view-favourite-book/view-favourite-book.component';
import { AddLibrarianComponent } from './components/add-librarian/add-librarian.component';
import { ViewLibrarianListComponent } from './components/view-librarian-list/view-librarian-list.component';
import { UpdateLibrarianComponent } from './components/update-librarian/update-librarian.component';
import { LibrarianLoginComponent } from './components/librarian-login/librarian-login.component';

export const routes:Routes= [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent },
  {path:'librarianLogin',component:LibrarianLoginComponent},
  {path:'admin/home',component:HomeComponent,children: [
    {path:'viewUser',component:AdminComponent},
    {path:'profile',component:ProfilesComponent},
    {path:'viewLibrarianList',component:ViewLibrarianListComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'addLibrarian',component:AddLibrarianComponent},
    {path:'updateuser/:id',component:UpdateuserComponent},
    {path:'updateLibrarian/:id',component:UpdateLibrarianComponent},
    {path:'viewBook',component:LibrarianComponent},
    {path:'addbook',component:AddbookComponent},
    {path:'adminReplyBox',component:AdminreplyComponent},
    {path:'viewUserRequest',component:ViewuserrequestComponent},
    {path:'viewLibrarianRequest',component:ViewlibrarianrequestComponent}
  ]},
  {path:'librarian/home',component:HomeComponent, children:[
    {path:'viewBook',component:LibrarianComponent},
    {path:'addbook',component:AddbookComponent},
    {path:'updatebook/:id',component:AddbookComponent},
    {path:'viewUserRequest',component:ViewuserrequestComponent},
    {path:'viewAdminReply',component:ViewadminreplyComponent},
    {path:'librarianTextBox',component:LibrarianTextBoxComponent},
    {path:'sendNotification',component:NotificationComponent}
  ]},
  {path:'user/home',component:HomeComponent, children:[
    {path:'viewBooks',component:UserComponent},
    {path:'request',component:RequestComponent},
    {path:'viewNotification',component:ViewnotificationComponent},
    {path:'profile',component:ProfilesComponent},
    {path:'editProfile/:id',component:EditProfileComponent},
    {path:'viewReqList',component:ViewReqStatusComponent},
    {path:'viewFavouriteBook',component:ViewFavouriteBookComponent}
  ]},
  {path:'login/reset',component:ResetPasswordComponent},
  {path:'logout', component: LoginComponent},
  {path:'login/register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
