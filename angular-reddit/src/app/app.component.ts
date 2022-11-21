import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): Boolean {
    let t = title.value;
    let v = link.value;
    console.log(`adding articòe title: `+t+` and link: `+v)
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    return false;
  }
}
