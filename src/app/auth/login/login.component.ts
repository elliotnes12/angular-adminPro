import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;


  constructor(
    private builder:FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.builder.group({
        "user":['',[Validators.required,Validators.email]],
        "password":['',[Validators.required]]
    });


    this.form.patchValue({
      user:"test@gmail.com"
    });
    
  }


  send(){

  }

}
