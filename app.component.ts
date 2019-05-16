import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  userForm:FormGroup;
  userList;
  constructor(private http:HttpClient){
    this.userForm=new FormGroup({
      'name':new FormControl(),
      'age':new FormControl(),
      'email':new FormControl()

    });
    this.http.get('http://5cdd0a92b22718001417c19d.mockapi.io/api/users')
    .toPromise()
    .then((response)=>{
      console.log(response);
      this.userList=response;
    })
  }

    submitForm(){
      console.log(this.userForm.value)
    }


  }

