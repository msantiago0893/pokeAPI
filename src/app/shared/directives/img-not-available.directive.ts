import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgNotAvailable]'
})
export class ImgNotAvailableDirective {

  @Input() imgCustom: string;

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('error')
  uploadImgDefect() {
    const element = this.elementRef.nativeElement;

    element.src = this.imgCustom;
  }
}
