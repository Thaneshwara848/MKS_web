import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dblogic(){
    console.log("100 lines of code fr C class ")
  }
}
