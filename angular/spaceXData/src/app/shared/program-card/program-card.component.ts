import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-card[programData]',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit {

  @Input() programData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.programData)
    if (!this.programData) {
      throw new TypeError("'programData' is required");
    }
  }

}
