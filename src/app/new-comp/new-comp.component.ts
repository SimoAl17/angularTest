import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.scss']
})
export class NewCompComponent implements OnInit {

  user = {name: 'andrea', loginDate: new Date(), result:[100, 1002, 1]}

  @Output() userSaved = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log("");
  }

  saveLocal() {
    window.localStorage.setItem("paperino", JSON.stringify(this.user));
    this.userSaved.emit('vai');
  }

}
