import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lch1',
  templateUrl: './lch1.component.html',
  styleUrls: ['./lch1.component.css']
})
export class Lch1Component implements OnInit ,OnDestroy,DoCheck{

  constructor() {
    console.log("Hi Constructor  LCH1 ")
   }
  ngDoCheck(): void {
    console.log("HiDo Check Method ....!")
    }
  ngOnDestroy(): void {
   console.log("Component Destoried1 .....")
  }

  ngOnInit(): void {
    console.log("Hi NgOnINiT  LCH1 ")
  }

  abc()
  {
    console.log("Abc Method ....!")
  }
}
