import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
xyz=false;

friuts:any=["Apple","banana","Cherry","Guva","Pomo","Mango"]
friendslist = [
  {
    name: 'Nishant',
    age: 25
  },
  {
    name: 'Shailesh',
    age: 45
  },
  {
    name: 'Abhishek',
    age: 36
  },
  {
    name: 'Akshay',
    age: 65
  },
  {
    name: 'Ashish',
    age: 12
  },
  {
    name: 'Uday',
    age: 31
  },
  {
    name: 'Mayank',
    age: 45
  },
  {
    name: 'Raju',
    age: 74
  },
]




addfriuit(fruit1:any){
  this.friuts.push(fruit1);
}

mydec=8;


mydecnum(lang:any){
 this.mydec=lang;
}

}
