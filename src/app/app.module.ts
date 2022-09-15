import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { Header2Component } from './header2/header2.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { BridgeDetailComponent } from './bridge-detail/bridge-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TopListPageComponent } from './top-list-page/top-list-page.component';
import { SearchResultComponent } from './search-result/search-result.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'latest-posts', component: LatestPostsComponent},
  {path: 'top-list-page/:id', component: TopListPageComponent},
  {path: 'search-result', component: SearchResultComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'bridge-detail', component: BridgeDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    Header2Component,
    LatestPostsComponent,
    TopListPageComponent,
    LatestPostsComponent,
    BridgeDetailComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
