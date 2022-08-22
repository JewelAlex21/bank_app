import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database:any={
    1000:{acno:1000,username:'Max',password:1000,balance:5000},
    1001:{acno:1001,username:'Arun',password:1001,balance:6000},
    1002:{acno:1002,username:'Sanjay',password:1002,balance:5000}

  }

  constructor() {
    this.getDetails()
   }

  // Get Details

  getDetails()
  {
    this.database = JSON.parse(localStorage.getItem('database') || '')
  }

  // Save Details

  saveDetails()
  {
    localStorage.setItem('database',JSON.stringify(this.database))
  }


  // register
  register(acno:any,username:any,password:any)
  {
    let database = this.database
    if(acno in database)
    {
      return false
    }
    else
    {
      database[acno] = {
        acno,
        username,
        password,
        balance:0
      }
      this.saveDetails()
      return true
    }
  }


  login(acno:any,pswd:any)
  {
    let userDetails = this.database
    if(acno in userDetails)
    {
      if(pswd==userDetails[acno]['password'])
      {
       return true
      }
      else
      {
        alert("Incorrect Password")
        return false
      }
    }
    else
    {
      alert("Account Doesnot Exist")
      return false
    }

  }



}
