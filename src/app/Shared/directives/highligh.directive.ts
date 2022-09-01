import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  @Input() highlight: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this._highlight('orange');
  }

  @HostListener('mouseleave') onMouseleave() {
    this._highlight('');
  }

  private _highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
