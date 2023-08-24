import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  constructor(private elementref:ElementRef ,private ren:Renderer2) { }
  ngOnInit(): void {
    

  }
  @HostListener('mouseenter') onmouseenter(){
    this.ren.setStyle(
      this.elementref.nativeElement,'backgroundColor','black'
    );
  }

}


