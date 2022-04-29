import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }
  @Input()  name!: User
  @Output() changeNameEvent = new EventEmitter<User>()
  ngOnInit(): void {
  }

  doSomeChange() {
    console.info("click on change")
    this.name.age = 15
    this.changeNameEvent.emit(this.name)
  }

}
