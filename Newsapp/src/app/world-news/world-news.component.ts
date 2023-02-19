import { Component } from '@angular/core';
import {ActivatedRoute,Route, Router } from '@angular/router';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.css']
})
export class WorldNewsComponent {
  __newsService:NewsOperationsService; // creating object of Service layer
  router:Router;

  
  allNews : Array<News> = [];
  



  constructor(newsService:NewsOperationsService,router:Router)
  {
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('World');
    this.router = router;
    console.log(this.allNews.length);
  }
  viewNewsDetails(category:string)
  {
    
    this.router.navigate(['newsDetail',category]);
  }

}
