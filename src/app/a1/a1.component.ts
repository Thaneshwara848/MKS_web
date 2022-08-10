import { Component, OnInit } from '@angular/core';
import { CommServService } from '../comm-serv.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit {

  constructor(private dbc:CommServService) { }

  ngOnInit(): void {
  }

  dblogic(username:any){
    this.dbc.dbcommonLogic(username);
  }
}
