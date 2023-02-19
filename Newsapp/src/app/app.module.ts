import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { CrimeNewsComponent } from './crime-news/crime-news.component';
import { PoliticsComponent } from './politics/politics.component';
import { HeaderComponent } from './header/header.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { NewsPipe } from './news-pipe';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


const allLinks:Routes = [
  {path:'BusinessNews',component:BusinessNewsComponent},
  {path:'Politics',component:PoliticsComponent},
  {path:'CrimeNews',component:CrimeNewsComponent},
  {path:'WorldNews',component:WorldNewsComponent},
  {path:'Technology',component:TechnologyComponent},
  {path:'Sports',component:SportsComponent},
  {path:'newsDetail/:category',component:ViewDetailsComponent},
  
  
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    BusinessNewsComponent,
    CrimeNewsComponent,
    PoliticsComponent,
    HeaderComponent,
    SportsComponent,
    TechnologyComponent,
    ViewDetailsComponent,
    WorldNewsComponent,
    NewsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
