import { Component, OnInit } from '@angular/core';
import {DataService} from "../allservices.service";

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {

  constructor(public handle:DataService) { }

  ngOnInit() {
    this.handle.dataFromService.nativeElement.style.height="0%";
  }
}
