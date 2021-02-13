import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-buttons[radioButtonsData]',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent implements OnInit {

  constructor() { }

  ngModelContainer: object = {};

  /* input decorator which accets array of object which gets iterated to show multiple filter buttons 
  belonging to a same group*/
  @Input()radioButtonsData: Array<object> = [];

  /* Input to set the default value */
  @Input() defaultValue: any = '';

  /* output decorator to emit or pass the clicked button value to the parent filter section component */
  @Output() filterClicked = new EventEmitter<any>();

  ngOnInit(): void {
    if(this.radioButtonsData.length == 0){
      throw new TypeError("pass an array with data to the 'radioButtonsData'");
    }
    if(this.defaultValue && this.radioButtonsData.length>0){
      this.ngModelContainer[this.radioButtonsData[0]['name']] = this.defaultValue;
    }
  }

  setValue(elementName: string,elementValue: string):void{
    /* setting passed value in ng model to trigger checked status of the hidden radio button */
    this.ngModelContainer[elementName] = elementValue
    const filterValueName = {name: elementName, value:elementValue}
    this.filterClicked.emit(filterValueName);
  }

  /* function to track the unique values provided to radio buttons binded with track by in ngFor */
  radioBtnFn(item):any{
    return item['value']
  }

}
