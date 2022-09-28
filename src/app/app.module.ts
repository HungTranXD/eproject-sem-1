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
import { BridgeDetailGalleryComponent } from './bridge-detail-gallery/bridge-detail-gallery.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BridgesByContinentComponent } from './bridges-by-continent/bridges-by-continent.component';
import { BridgesHistoryComponent } from './bridges-history/bridges-history.component';
import {LightboxModule} from "ngx-lightbox";
import {ngxLoadingAnimationTypes, NgxLoadingModule} from "ngx-loading";
import { BridgePageComponent } from './bridge-page/bridge-page.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { HistoricalGreatBridgesComponent } from './historical-great-bridges/historical-great-bridges.component';
import { IconicBridgesComponent } from './iconic-bridges/iconic-bridges.component';
import { ModernGreatBridgesComponent } from './modern-great-bridges/modern-great-bridges.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'latest-posts', component: LatestPostsComponent},
  {path: 'top-list-page/:id', component: TopListPageComponent},
  {path: 'search-result/:name', component: SearchResultComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'bridge-detail', component: BridgeDetailComponent},
  {path: 'bridges-by-continent/:id', component: BridgesByContinentComponent},
  {path: 'bridges-history', component: BridgesHistoryComponent},
  {path: 'bridge-page/:id', component: BridgePageComponent},
  {path: 'historical-great-bridges', component: HistoricalGreatBridgesComponent},
  {path: 'iconic-bridges', component: IconicBridgesComponent},
  {path: 'modern-great-bridges', component: ModernGreatBridgesComponent},
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
    SearchResultComponent,
    BridgeDetailGalleryComponent,
    BridgesByContinentComponent,
    BridgesHistoryComponent,
    BridgePageComponent,
    ScrollToTopComponent,
    HistoricalGreatBridgesComponent,
    IconicBridgesComponent,
    ModernGreatBridgesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    BrowserAnimationsModule,
    LightboxModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.cubeGrid,
      backdropBackgroundColour: "rgba(255,255,255)",
      backdropBorderRadius: "4px",
      primaryColour: "#ff3d00",
      secondaryColour: "#ff3d00",
      tertiaryColour: "#ff3d00",
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
