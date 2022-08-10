import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-rama',
  templateUrl: './rama.component.html',
  styleUrls: ['./rama.component.css']
})
export class RamaComponent implements OnInit {

  constructor(private msg:ChatservService) { }


  ngOnInit(): void {
  }

  msgs:any=[];
  send(mymsg:any){
  this.msgs = this.msg.chat(mymsg);
}
}
