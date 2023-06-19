import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  login:boolean =true
  signup:boolean=false
  display:string="dsa"
  userDetails: any[] = [
  ];
  userInfo={
    FirstName:"",
    LastName:"",
    dateOfBirth:"",
    email:"",
    password:"",
    phoneNumber:""
  }

  constructor() { }

  ngOnInit() {
  }

  onSignUp(){
    this.login=false
    this.signup=true
    for (const [key, value] of Object.entries(this.userInfo)) {
        if(!value || value==undefined){
          this.display=key +" must have value"
        }
    }
    //this.display=this.userInfo.FirstName
  }

  onLogIn(){
    this.login=true
    this.signup=false

  }

}
