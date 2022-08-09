import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  i=1;
  mydec=false;
  increment(){
    console.log("HI : "+this.i++)
    if(this.i>5)
    {
      alert("We cantr add mor ethe 5 ")
      this.mydec=true
    }
  }

  descement()
  {
    console.log("hello :"+this.i--)
  }

  company=" TCS "

  myimg="../../assets/slimg1.jpg";
  
  
  total=0;

  cal(p:any,t:any,r:any)
  {
   
   this.total =(p*t*r)/100;
    

  }

  name=""
  selectChangeHandler (event: any) {
    //update the ui
    console.log( event.target.value)
    if(event.target.value=="car")
    {
      this.name="8";
    }
   else if(event.target.value=="home")
    {
      this.name="10";
    }
    else if(event.target.value=="edu")
    {
      this.name="11";
    }
    else if(event.target.value=="personal")
    {
      this.name="13";
    }
  }


  myname="Suresh";
  }
