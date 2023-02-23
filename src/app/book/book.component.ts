import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  __bookService:BookOperationsService; // creating object of Service layer
   router:Router;

  
   allBook : Array<Book> = [];
   wishList : Array<Book> = [];
   wishlistCount:number=0 ;
   cart : Array<Book> =[];
   cartCount :number=0;
 
   priceHighCss:string = "color:crimson";
   priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
   priceNormalCSS:string = "color:black";
 
   constructor(bookService:BookOperationsService,router:Router)
   {
     this.__bookService = bookService;
     this.allBook = this.__bookService.getBookArr();
     this.router = router;
     console.log(this.allBook.length);
   }
   viewBookDetails(bid:string)
   {
     
     this.router.navigate(['bookDetail',bid]);
   }
 
 
   
 
   goForBuy(book:string)
   {
     let bookId = parseInt(book);
     console.log(" code to buy "+bookId+" book");
     
   }
 
   addWishlist(book:string)
   {
     let addBookId = parseInt(book);
     
     this.allBook.forEach(b=>{
       if(b.bookId == addBookId)
       {
         this.wishList.push(b);
         
       }
     });
     this.wishlistCount = this.wishList.length;
     console.log(this.wishList);
     
   }
   addCart(book:string)
   {
     let addBookId = parseInt(book);
     
     this.allBook.forEach(b=>{
       if(b.bookId == addBookId)
       {
         this.cart.push(b);
         
       }
     });
     this.cartCount = this.cart.length;
     console.log(this.cart);
     
   }
   
 
   getFilterData(filterValue:string)
   {
     console.log(" Filter Value "+filterValue);
 
     this.allBook = this.__bookService.getBooksByCategory(filterValue);
   }
   getFilterData2(filterValue:string)
   {
     console.log(" Filter Value "+filterValue);
 
     this.allBook = this.__bookService.getBooksByLanguage(filterValue);
   }

}


