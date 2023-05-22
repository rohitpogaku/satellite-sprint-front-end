import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SatelliteListComponent} from "./satellite-list/satellite-list.component";
import {HomeComponent} from "./home/home.component";
import {CommunityComponent} from "./community/community.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SatellitePageComponent} from "./satellite-page/satellite-page.component";
import {PostComponent} from "./post/post.component";
import {PostEditComponent} from "./post-edit/post-edit.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {SatelliteEditComponent} from "./satellite-edit/satellite-edit.component";
import {SatelliteCreateComponent} from "./satellite-create/satellite-create.component";
import {ContactusComponent} from './contactus/contactus.component';
import {GalleryComponent} from './gallery/gallery.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {UseraddComponent} from './useradd/useradd.component';
import {UsereditComponent} from './useredit/useredit.component';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "satellites", canActivate: [AuthGuard], component: SatelliteListComponent},
  {path: "community", canActivate: [AuthGuard], component: CommunityComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "about", component: AboutUsComponent},
  {path: "message", component: ContactusComponent},
  {path: "user", canActivate: [AuthGuard], component: UserComponent},
  {path: "useradd", canActivate: [AuthGuard], component: UseraddComponent},
  {path: "useredit/:id", canActivate: [AuthGuard], component: UsereditComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", canActivate: [AuthGuard], component: UserProfileComponent},
  {path: "satellites/create", canActivate: [AuthGuard], component: SatelliteCreateComponent},
  {path: "satellites/:id", canActivate: [AuthGuard], component: SatellitePageComponent},
  {path: "satellites/:id/edit", canActivate: [AuthGuard], component: SatelliteEditComponent},
  {path: "posts/create", canActivate: [AuthGuard], component: PostCreateComponent},
  {path: "posts/:id", canActivate: [AuthGuard], component: PostComponent},
  {path: "posts/:id/edit", canActivate: [AuthGuard], component: PostEditComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
