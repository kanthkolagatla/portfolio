import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {DataService} from "../allservices.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //@Input() fake:userUpdated;

  constructor(public handle:DataService) { }

  ngOnInit() {
    this.handle.dataFromService.nativeElement.style.height="0%";
  }

}
