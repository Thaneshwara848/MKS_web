import { Component, OnInit } from '@angular/core';
import { CommServService } from '../comm-serv.service';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.css']
})
export class B1Component implements OnInit {

  constructor(private db:CommServService) { }

  ngOnInit(): void {
  }

  name="";
  dblogic(){
    this.name=this.db.myname;
  }
}
