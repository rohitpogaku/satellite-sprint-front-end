import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SatelliteListComponent} from "./satellite-list/satellite-list.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {CommunityComponent} from "./community/community.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SatellitePageComponent} from "./satellite-page/satellite-page.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "satellites", component: SatelliteListComponent},
  {path: "community", component: CommunityComponent},
  {path: "about", component: AboutUsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "satellites/:id", component: SatellitePageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
