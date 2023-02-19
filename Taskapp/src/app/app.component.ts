import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taskapp';
  router:Router;
  constructor(router:Router){
    this.router=router;
  }

  onSubmit(input:string){

    if(input=='admin'){
      this.router.navigate(['admin']);
    }
    else if(input=='normal'){
      this.router.navigate(['normal']);
    }
  }
}
