import { Component } from '@angular/core';
import { BookOperationsService} from '../book-operations.service';
import { BookRequest } from '../book-request';

@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrls: ['./requested-books.component.css']
})
export class RequestedBooksComponent {
  __bookService:BookOperationsService;
  b:BookRequest = new BookRequest(0,'','',0,'',0);
  bookRequestArr:BookRequest[]=[];

  constructor(bookService:BookOperationsService)
  {
    this.__bookService = bookService;
    this.bookRequestArr=bookService.bookRequestArr;
  }

}
