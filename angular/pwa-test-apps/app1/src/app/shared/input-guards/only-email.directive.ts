import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyEmail]',
})
export class OnlyEmailDirective {

  @Input() OnlyEmail: boolean = false;

  constructor() {}

  @HostListener('keydown', ['$event']) onKeyDown(event:any) {
    let e = <KeyboardEvent>event;
    if (this.OnlyEmail) {
      if (
        [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        // let it happen, don't do anything
        return;
      }
      const emailRegex = new RegExp('[a-zA-Z0-9._@-]');
      if (!emailRegex.test(e.key)) {
        e.preventDefault();
      }
      // Ensure that it is a number and stop the keypress
      // if (
      //   (e.shiftKey ||
      //     e.keyCode < 48 ||
      //     e.keyCode === 190 ||
      //     e.keyCode > 57 ||
      //     e.keyCode === 110) &&
      //   (e.keyCode < 96 || e.keyCode > 105)
      // ) {
      //   e.preventDefault();
      // }
    }
  }
}