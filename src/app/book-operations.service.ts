import { Injectable } from '@angular/core';
import { Book } from './book';
import { BookRequest } from './book-request';


@Injectable({
  providedIn: 'root'
})
export class BookOperationsService {
 

  constructor() { }

  bookArr:Book[]=[];

  addBook(bookFromadmin:Book)
  {
    this.bookArr.push(bookFromadmin);
    console.log("Inside Book Service : Book Added ");
    console.log(" Total Books Are:- "+this.bookArr.length);

  }
  bookRequestArr:BookRequest[]=[];
  addBookRequest(bookFromUser: BookRequest) {
    this.bookRequestArr.push(bookFromUser);
    console.log("Inside Book Service : Book Requested Added ");
    console.log(" Total Books Are:- "+this.bookRequestArr.length);
    
  }
  getBookRequestArr():BookRequest[]
  {
    return this.bookRequestArr;
  }


  getBookArr():Book[]
  {
    return this.bookArr;
  }
  getBookByNumber(searchBookId:number):Book
  {
    let outputBook:Book = new Book(0,'','','','',0,0,'','','');
    for(let i=0;i<this.bookArr.length;i++)
    {
      let thisBook:Book= this.bookArr[i];
        if(thisBook.bookId == searchBookId)
        {
          outputBook = thisBook;
          break;
        }
    }
    
    return outputBook;
  }

  getBooksByCategory(filterCategory:string):Book[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Book[] = [];

    this.bookArr.forEach(b=>{
      if(b.category == filterCategory)
      {
        outputArr.push(b);
      }
    });

    return outputArr;
  }
  getBooksByLanguage(filterLanguage:string):Book[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Book[] = [];

    this.bookArr.forEach(b=>{
      if(b.language == filterLanguage)
      {
        outputArr.push(b);
      }
    });

    return outputArr;
  }
  
}

