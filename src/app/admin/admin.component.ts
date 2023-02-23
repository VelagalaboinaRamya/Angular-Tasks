import { Component } from '@angular/core';
import { Book } from '../book';
import { BookOperationsService } from '../book-operations.service';
import { BookRequest } from '../book-request';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  __bookService:BookOperationsService;
  

  constructor(bookService:BookOperationsService)
  {
    this.__bookService = bookService;
   
  }

  readBook(bookId:string,title:string,author:string,category:string,description:string,price:number,discount:number,publishDate:string,language:string,imageName:string)
  {
      console.log(bookId+" "+title+" "+author+" "+category+" "+description+" "+price+" "+discount+" "+publishDate+" "+language+" "+imageName);
      let bookFromUser:Book = new Book(parseInt(bookId),title,author,category,description,price,discount,publishDate,language,imageName);
      this.__bookService.addBook(bookFromUser);

}

}
