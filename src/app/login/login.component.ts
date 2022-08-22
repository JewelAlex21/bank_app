import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // property/variable

  header="Welcome To Our Bank"
  dot="....."

  accPlaceholder= "Account Please"
  // acno
  acno=""
  // pswd
  pswd=""


  // database

  database:any={
    1000:{acno:1000,username:'Max',password:1000,balance:5000},
    1001:{acno:1001,username:'Arun',password:1001,balance:6000},
    1002:{acno:1002,username:'Sanjay',password:1002,balance:5000}

  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // user defined function
  
 

  login()
  {
    // alert('Login Successfully')
    // fetch acno
    var acno =this.acno
    var pswd=this.pswd

    let userDetails = this.database
    if(acno in userDetails)
    {
      if(pswd==userDetails[acno]['password'])
      {
        alert("Login Successfully")
        // navigate to dashboard
        this.router.navigateByUrl('dashboard')
      }
      else
      {
        alert("Incorrect Password")
      }
    }
    else
    {
      alert("Account Doesnot Exist")
    }

  }


  
  

}
