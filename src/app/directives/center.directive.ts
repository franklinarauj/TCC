import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCenter]'
})
export class CenterDirective {

  constructor(private el: ElementRef, private il: ElementRef) {
    el.nativeElement.style.position = 'relative';
    il.nativeElement.style.position = 'absolute';
    il.nativeElement.style.top = '50%';
    il.nativeElement.style.left = '50%';
    il.nativeElement.style.transform = 'translate(-50%, -50%)';
   }
}
