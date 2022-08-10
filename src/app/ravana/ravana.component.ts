import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-ravana',
  templateUrl: './ravana.component.html',
  styleUrls: ['./ravana.component.css']
})
export class RavanaComponent implements OnInit {

  constructor(private msg:ChatservService) { }

  ngOnInit(): void {
  }

  msgs:any=[];
  send(mymsg:any){
  this.msgs = this.msg.chat(mymsg);
}

}
