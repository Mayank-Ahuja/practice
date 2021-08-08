import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.css']
})
export class DirectiveTestComponent implements OnInit {

  showParagraph: boolean = true;
  clickCounter: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }

  displayDetails():void {
    this.showParagraph = !this.showParagraph;
    this.clickCounter.push(this.clickCounter.length+1);
  }

}
