export class News {
    headlines:string;
    category:string;
    mainNews:string;
    imageName:string;
    

    constructor(
        headlines:string,
        category:string,
        mainNews:string,
        imageName:string
    )
    {
          this.headlines = headlines;
          this.category = category;
          this.mainNews = mainNews;
          this.imageName = imageName;
    }
}
