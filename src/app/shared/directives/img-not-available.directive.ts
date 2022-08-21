import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

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

    element.src = this.imgCustom || 'https://importadorachen.com.pa/assets/img/portfolio/nodisponible.png';
  }
}
