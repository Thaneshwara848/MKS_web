import { Component, OnInit } from '@angular/core';
import { CommServService } from '../comm-serv.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private dbs:CommServService) { }

  ngOnInit(): void {
  }
  name =""
  dblogic(){
   this.name =this.dbs.myname;
  }
}
