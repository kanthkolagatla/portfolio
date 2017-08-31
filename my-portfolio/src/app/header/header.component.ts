import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuTab') input: ElementRef;

  menuFlag: boolean;
  closeFlag: boolean;
  constructor() { }

  ngOnInit() {
    this.menuFlag=false;
    this.closeFlag=false;
  }



  openMenu(){
    this.menuFlag= !this.menuFlag;
    this.input.nativeElement.style.height= '100%';
  }

  closeMenu(){
    this.menuFlag= !this.menuFlag;
    this.input.nativeElement.style.height= '0%';
  }
}
