import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';

import { FeaturedAuthorComponent } from './featured-author/featured-author.component';


import { HeaderComponent } from './header/header.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminComponent } from './admin/admin.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CommonModule } from '@angular/common';
import { BookReviewComponent } from './book-review/book-review.component';
import { UserComponent } from './user/user.component';
import { RequestABookComponent } from './request-a-book/request-a-book.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { InfoPipe } from './info-pipe';

const allLinks:Routes = [
  {path:'bookCategory',component:BookComponent},
  {path:'New Arrivals',component:NewArrivalsComponent},
  {path:'Best sellers',component:BestSellersComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'Featured Authors',component:FeaturedAuthorComponent},
  {path:'Request a Book',component:RequestABookComponent},
  {path:'bookDetails',component:BookDetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'requestedBooks',component:RequestedBooksComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NewArrivalsComponent,
    BestSellersComponent,
    FeaturedAuthorComponent,
    
    HeaderComponent,
    AddBookComponent,
    AdminComponent,
    BookDetailsComponent,
    BookReviewComponent,
    UserComponent,
    RequestABookComponent,
    RequestedBooksComponent,
    InfoPipe

    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks),FormsModule,HttpClientModule,
  
    AppRoutingModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
