import { Component, OnInit } from '@angular/core';
import { CommServService } from '../comm-serv.service';

@Component({
  selector: 'app-d1',
  templateUrl: './d1.component.html',
  styleUrls: ['./d1.component.css']
})
export class D1Component implements OnInit {

  constructor(private  d: CommServService) { }

  ngOnInit(): void {
  }

  dblogic(){
   this.d.dbcommonLogic();
  }
}
