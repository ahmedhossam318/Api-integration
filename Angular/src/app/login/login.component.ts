import { Component,Input, OnInit } from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import {User} from "../shared/user";
import {RegisterService} from '../services/register.service'
import {json} from "@angular-devkit/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public alerts: Array<string> = [];
  type: string = '';
  login: boolean = false;
  message: string = '';
data:any
  constructor(alertConfig: NgbAlertConfig ,public restApi:RegisterService) {

      alertConfig.type = this.type ;
    alertConfig.dismissible = true;

  }
  ngOnInit(): void {
  }
  user:User  = {fullname:"",email:"",password:"",};
  onSubmit(user:User)
  {
    this.restApi.loginUser(user).subscribe(response  => {

       this.data = response
        // for (let i in response)
        // console.warn(i)
     // console.warn(response)


    })
    console.warn(this.data)
  }
}
