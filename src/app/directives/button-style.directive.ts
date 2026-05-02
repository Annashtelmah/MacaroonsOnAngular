import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[buttonStyle]',
})
export class ButtonStyleDirective implements OnInit {
  @Input() buttonStyleDefaultColor: string =
    'linear-gradient( to right, rgb(113, 8, 30) 0%,rgb(215, 72, 92) 100%)';
  @Input() buttonStyleHoverColor: string = 'linear-gradient( to left, rgb(113, 8, 30) 0%,rgb(215, 72, 92) 100%)';


  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.changeElementBgColor(this.buttonStyleDefaultColor);
  }
  @HostListener('mouseenter') onMouseEnter() {
  this.changeElementBgColor(this.buttonStyleHoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeElementBgColor(this.buttonStyleDefaultColor);
  }
  changeElementBgColor(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
