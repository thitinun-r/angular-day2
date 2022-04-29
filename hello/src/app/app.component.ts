import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  name = 'Thitinun.r'

  doShowName(event: Event) {
    let val = (event.target as HTMLInputElement).value
    console.info(val)
    this.name = val
  }
}
