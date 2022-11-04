import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User =new User();

  constructor(private loginuserservice: LoginuserService) { }

  ngOnInit(): void {
  }
  Login(){
    console.log(this.user)
    this.loginuserservice.loginuser(this.user).subscribe(data=>{
      alert("Login Successfully")
    },error=>alert("Sorry please enter correct UserId and password"));
  }

}
