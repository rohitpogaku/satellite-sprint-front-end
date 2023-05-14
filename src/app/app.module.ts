import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SatelliteListComponent} from './satellite-list/satellite-list.component';
import {SatelliteCardComponent} from './satellite-card/satellite-card.component';
import {HttpClientModule} from "@angular/common/http";
import {NavComponent} from './nav/nav.component';
import {CommunityComponent} from './community/community.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SatellitePageComponent} from './satellite-page/satellite-page.component';
import {FooterComponent} from './footer/footer.component';
import {PostComponent} from './post/post.component';
import {SatelliteTableComponent} from './satellite-table/satellite-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SatelliteEditComponent} from './satellite-edit/satellite-edit.component';
import {NgOptimizedImage} from "@angular/common";
import { SatelliteCreateComponent } from './satellite-create/satellite-create.component';

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
    FooterComponent,
    PostComponent,
    SatelliteTableComponent,
    SatelliteEditComponent,
    SatelliteCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
