import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommServService {

  constructor() { }
  myname="";
  dbcommonLogic(name:any)
  {
    console.log("My Name is : "+name)
    this.myname=name
  }
}
