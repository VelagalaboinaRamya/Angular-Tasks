import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsOperationsService {

  constructor() { 
    let news1:News=new News('stock Market Rises','BusinessNews','the stock market ends with profit today','stock.JPG')
    let news2:News=new News('Elections are going to be held in Telangana','Politics','Opposition leaders are planning to win the race','politics.JPG')
    let news3:News=new News('The Murder in Patna','Crime','a lady got murdered in patna and patna police has started to investige the crime','crime.JPG')
    let news4:News=new News('Azarbaizan faces crises','World','Azarbaizan facing many crises in terms of Economy','world.JPG')
    let news5:News=new News('New Era of Technology','Technology','The new technology was launched into market by Relaiance India','technology.JPG')
    let news6:News=new News('Cricket','Sports','A total of 36 players have captained India in test matches, of which Virat Kohli is the most successful with 40 wins.','sports.JPG')
    
    this.newsArr.push(news1)
    this.newsArr.push(news2)
    this.newsArr.push(news3)
    this.newsArr.push(news4)
    this.newsArr.push(news5)
    this.newsArr.push(news6)
  }

  newsArr:News[] = [];

  getNewsArr():News[]
  {
    return this.newsArr;
  }
  getNewsByCategory(filterCategory:string):News[]
  {
    
   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
    });

    return outputArr;
  }
  getNewsByCategories(searchCategory:string):News
  {
    let outputNews:News = new News('','','','');
    for(let i=0;i<this.newsArr.length;i++)
    {
      let thisNews:News = this.newsArr[i];
        if(thisNews.category == searchCategory)
        {
          outputNews = thisNews;
          break;
        }
    }
    
    return outputNews;
  }
  
}
