import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SatelliteListComponent} from "./satellite-list/satellite-list.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
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

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "satellites", component: SatelliteListComponent},
  {path: "community", component: CommunityComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "about", component: AboutUsComponent},
  {path: "message", component: ContactusComponent },
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "satellites/create", component: SatelliteCreateComponent},
  {path: "satellites/:id", component: SatellitePageComponent},
  {path: "satellites/:id/edit", component: SatelliteEditComponent},
  {path: "posts/:id", component: PostComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
