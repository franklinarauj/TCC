import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCenter]'
})

export class CenterDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.position = 'relative';
    el.nativeElement.style.position = 'absolute';
    el.nativeElement.style.top = '50%';
    el.nativeElement.style.left = '50%';
    el.nativeElement.style.transform = 'translate(-50%, -50%)';
   }
}

// TÁ FUNCIONANDO
