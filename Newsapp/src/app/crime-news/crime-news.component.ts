import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';

@Component({
  selector: 'app-crime-news',
  templateUrl: './crime-news.component.html',
  styleUrls: ['./crime-news.component.css']
})
export class CrimeNewsComponent {
  __newsService:NewsOperationsService; // creating object of Service layer
  router:Router;

  
  allNews : Array<News> = [];
  



  constructor(newsService:NewsOperationsService,router:Router)
  {
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('Crime');
    this.router = router;
    console.log(this.allNews.length);
  }
  viewNewsDetails(category:string)
  {
    
    this.router.navigate(['newsDetail',category]);
  }


}
