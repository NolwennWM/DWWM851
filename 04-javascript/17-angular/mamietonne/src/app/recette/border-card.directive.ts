import { Directive, ElementRef, HostListener, Input } from '@angular/core';
type Shadow = [number, number, number, number];

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  @Input("appBorderCard") borderColor: string|undefined;
  
  private initColor: string = "black";
  private defaultColor: string = "green";
  private initShadow: Shadow = [5,5,10,2];
  private defaultShadow: Shadow = [5,5,20,2];

  constructor(private el: ElementRef) { 
    this.setShadow(...this.initShadow, this.initColor);
    this.setBorder(4, this.initColor);
  }
  @HostListener("mouseenter") onMouseEnter(){
    this.setBorder(4, this.borderColor || this.defaultColor);
    this.setShadow(...this.defaultShadow, this.borderColor || this.defaultColor);
  }
  @HostListener("mouseleave") OnMouseLeave(){
    this.setBorder(4, this.initColor);
    this.setShadow(...this.initShadow,this.initColor);
  }
  private setShadow(x:number, y: number, blur: number, radius: number, color: string){
    this.el.nativeElement.style.boxShadow = `${x}px ${y}px ${blur}px ${radius}px ${color}`;
  }
  private setBorder(size: number, color: string){
    this.el.nativeElement.style.border = `${size}px solid ${color}`;
    
  }
}
