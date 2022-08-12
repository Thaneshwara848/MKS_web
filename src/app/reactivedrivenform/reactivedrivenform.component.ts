import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactivedrivenform',
  templateUrl: './reactivedrivenform.component.html',
  styleUrls: ['./reactivedrivenform.component.css']
})
export class ReactivedrivenformComponent implements OnInit {

  constructor() { }

  student:any;
  ngOnInit(): void {
    this.student= new FormGroup({
      firstname :new FormControl("",Validators.compose(
        [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10),
            Validators.pattern('[a-zA-Z ]*$'),

          
        ]
      )),
      lastname :new FormControl("",Validators.compose(
        [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10)
        ]
      )),
      age :new FormControl("",Validators.compose(
        [
            Validators.required,
            Validators.min(18),
            Validators.max(60)
        ]
      )),
    })

  }

  myuserDisplay(mystudents:any){
      console.log(mystudents)
  }
}
