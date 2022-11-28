import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>();
  
  addArticle(useless: HTMLInputElement, spam: HTMLInputElement): Boolean {
    let u = useless.value;
    let s = spam.value;
    let cont = Number(spam.value);
    
    for(let i:number =0; i< cont; i++)  //Ciclo For in typescript
    {
      console.log(`adding article useless: `+u+` and spam: `+s)
      console.log(`Adding article useless: ${useless.value} and spam: ${spam.value}`);
      console.log(`Adding article useless: ${useless.value} and spam: ${spam.value}`)
      this.articles.push(useless.value);
    }
    return false;
  }
  
}
