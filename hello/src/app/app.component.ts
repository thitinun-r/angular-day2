import { Component } from '@angular/core';
import { User } from './models/user';

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

  parentName1 = {id:1,fname:"Thitinun.R"}
  // parentName2 = new User(1,"Thitinun.R") // class style
  parentName: User = {id:1,fname:"Thitinun.R"} // interface  style

  onResponse(event: User) {
    console.info("response to parent")
    console.table(event)
  }

  doShowName(newName: string) {
    // let val = (event.target as HTMLInputElement).value
    console.info(newName)
    this.name = newName
  }
}
