import { Component, OnInit } from '@angular/core';
import {DataService} from "../allservices.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public handle:DataService) { }

  ngOnInit() {
    this.handle.dataFromService.nativeElement.style.height="0%";
  }
}
