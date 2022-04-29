import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }
  @Input()  name: any
  @Output() changeNameEvent = new EventEmitter<any>()
  ngOnInit(): void {
  }

  doSomeChange() {
    console.info("click on change")
    this.name.age = 15
    this.changeNameEvent.emit(this.name)
  }

}
