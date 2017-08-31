import { Component, OnInit } from '@angular/core';
import {DataService} from "../allservices.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public handle:DataService) { }

  ngOnInit() {
    this.handle.dataFromService.nativeElement.style.height="0%";
  }

}
