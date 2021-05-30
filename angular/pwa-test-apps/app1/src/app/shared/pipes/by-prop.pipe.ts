import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byProp'
})
export class ByPropPipe implements PipeTransform {

  transform(collection: Array<object>, keyName: string, value: any): Array<object> {
    value = value ? value.toLowerCase() : '';
    const output:Array<any> = [];
    const keys = [];
    if (collection && collection.length > 0 && keyName) {
      collection.map((item:any) => {
        const itemValue = item[keyName] + '';
        itemValue.toLowerCase().trim() === value.trim() ? output.push(item) : '';
      });
    }
    return output;
  }


}
