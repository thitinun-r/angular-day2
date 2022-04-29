import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  name = 'Thitinun.r'

  doShowName(newName: string) {
    // let val = (event.target as HTMLInputElement).value
    console.info(newName)
    this.name = newName
  }
}
