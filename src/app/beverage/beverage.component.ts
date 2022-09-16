import { TextAst } from '@angular/compiler';
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {

  @Input() beverage = "tea";

  @Output() newBeverageEvent = new EventEmitter<string>();

  addNewBeverage(value:string){
    this.newBeverageEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
