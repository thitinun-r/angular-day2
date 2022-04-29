import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  name = 'Thitinun.r'
  listNames = []
  listsData = [
    {id: 1,fname: "thitinun.R"},
    {id: 2,fname: "apakorn.P"},
  ]

  parentName = {id:1,fname:"Thitinun.R"}

  doShowName(newName: string) {
    // let val = (event.target as HTMLInputElement).value
    console.info(newName)
    this.name = newName
  }
}
