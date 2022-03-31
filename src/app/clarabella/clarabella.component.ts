import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlutoService } from '../pluto.service';
import { Hero } from '../topolino.service';

@Component({
  selector: 'app-clarabella',
  template: `
    <button type="button" (click)="lightClicked()">Click me!</button>
    <span>{{message}}</span>`,
  styleUrls: ['./clarabella.component.scss']
})
export class ClarabellaComponent implements OnInit {

  isOn = false;
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  @Input() hero!: Hero;
  @Output() selected = new EventEmitter<Hero>();
 
  constructor(private pluto: PlutoService) { }
 
  ngOnInit(): void {
  }

  lightClicked() { this.isOn = !this.isOn; }
  heroClicked() { this.selected.emit(this.hero); }

}
