import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../services/register.service'
import {User} from '../shared/user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public restApi:RegisterService) {

  }

  ngOnInit(): void {
  }
  user:User  = {fullname:"",email:"",password:"",};
  onSubmit(user:User)
  {
    this.restApi.createUser(user).subscribe((data: {}) => {
      console.warn(JSON.stringify(user))

    })

  }
}
