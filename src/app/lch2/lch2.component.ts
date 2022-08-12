import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lch2',
  templateUrl: './lch2.component.html',
  styleUrls: ['./lch2.component.css']
})
export class Lch2Component implements OnInit,OnDestroy {

  constructor() {
    console.log("Hi Constructor  LCH2 ")
   }
  ngOnDestroy(): void {
   console.log("Component Destoried . 2 ....")
  }

  ngOnInit(): void {
    console.log("Hi NgOnINiT  LCH2 ")
  }

  abc()
  {
    console.log("Abc Method ....!")
  }
}
