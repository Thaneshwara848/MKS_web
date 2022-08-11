import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formsdemo',
  templateUrl: './formsdemo.component.html',
  styleUrls: ['./formsdemo.component.css']
})
export class FormsdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myuser(myuserdata:any){
    console.log(myuserdata)
  }
}
