import { Injectable } from '@angular/core';

@Injectable()
export class AllservicesService {

  constructor() { }

}


export class DataService{
  dataFromService: any;
  getDetails() {
    return this.dataFromService;
  }
}
