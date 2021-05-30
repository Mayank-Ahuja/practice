import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[NoInput]'
})
export class NoInputDirective {

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(event:any) {
    let e = <KeyboardEvent>event;
    e.preventDefault();
  }

}
