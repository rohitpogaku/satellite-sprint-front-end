import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SatelliteListComponent} from './satellite-list/satellite-list.component';
import {SatelliteCardComponent} from './satellite-card/satellite-card.component';
import {HttpClientModule} from "@angular/common/http";
import { NavComponent } from './nav/nav.component';
import { CommunityComponent } from './community/community.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SatellitePageComponent } from './satellite-page/satellite-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SatelliteListComponent,
    SatelliteCardComponent,
    NavComponent,
    CommunityComponent,
    AboutUsComponent,
    HomeComponent,
    PageNotFoundComponent,
    SatellitePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
