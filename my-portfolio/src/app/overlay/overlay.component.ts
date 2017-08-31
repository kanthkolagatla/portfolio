import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DataService} from "../allservices.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, AfterViewInit {

  @ViewChild('menuTab') layMenu: ElementRef;
  //@Output() userUpdated = new EventEmitter<ElementRef>();

  menuFlag: boolean;
  closeFlag: boolean;
  gr:string;

  constructor(public serviceName:DataService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.menuFlag=false;
    this.closeFlag=false;
  }

  menu = [
    { name:'about',
    link:'/about'},
    { name:'blog',
      link:'/blog'},
    { name:'fun',
      link:'/fun'},
    {name:'contact',
      link:'/contact'}
  ];
  ngAfterViewInit(){
    //this.userUpdated.emit(this.input);
    this.serviceName.dataFromService = this.layMenu
  }

  openMenu(){
    this.menuFlag= !this.menuFlag;
    this.layMenu.nativeElement.style.height= '100%';
  }

  closeMenu(){
    this.menuFlag= !this.menuFlag;
    this.layMenu.nativeElement.style.height= '0%';
  }

  naviagationPath(n){
    //n.preventDefault();
    console.log("nnnnn", n);
    console.log("event", n.target.innerHTML);
    this.gr=n.target.innerHTML
    this.router.navigate(['/home'+'/' +this.gr]);
  }
}
