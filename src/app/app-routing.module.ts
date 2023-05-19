import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SatelliteListComponent} from "./satellite-list/satellite-list.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import { authGuard } from './auth.guard';
import {CommunityComponent} from "./community/community.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SatellitePageComponent} from "./satellite-page/satellite-page.component";
import {PostComponent} from "./post/post.component";
import {SatelliteEditComponent} from "./satellite-edit/satellite-edit.component";
import {SatelliteCreateComponent} from "./satellite-create/satellite-create.component";
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UsereditComponent } from './useredit/useredit.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "satellites",canActivate:[authGuard], component: SatelliteListComponent},
  {path: "community",canActivate:[authGuard], component: CommunityComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "about", component: AboutUsComponent},
  {path: "message", component: ContactusComponent },
  {path:"user",component:UserComponent},
  {path:"useradd",component:UseraddComponent},
  {path:"useredit/:id",component:UsereditComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "satellites/create", component: SatelliteCreateComponent},
  {path: "satellites/:id", component: SatellitePageComponent},
  {path: "satellites/:id/edit", component: SatelliteEditComponent},
  {path: "posts/create", component: PostCreateComponent},
  {path: "posts/:id", component: PostComponent},
  {path: "posts/:id/edit", component: PostEditComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
