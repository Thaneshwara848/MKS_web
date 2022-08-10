import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-seetha',
  templateUrl: './seetha.component.html',
  styleUrls: ['./seetha.component.css']
})
export class SeethaComponent implements OnInit {

  constructor(private msg:ChatservService) { }

  ngOnInit(): void {
  }

  msgs:any=[];
  send(mymsg:any){
  this.msgs = this.msg.chat(mymsg);
}

}
