import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionServiceService } from '../connection-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  ngOnInit(): void {
  }

  registerForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router, private connectionserivce: ConnectionServiceService) {
    console.log("within constructor")
    this.registerForm = this.formbuilder.group({
      // userid:new FormControl('1',Validators.required),
      username: new FormControl('',Validators.required),
      useremail: new FormControl('',Validators.required),
      usercity: new FormControl(''),
      userpassword: new FormControl('',Validators.required),
      pizzaList:null
    })
  }
  onsubmit(){
    console.log(this.registerForm);
    let arr=this.registerForm.value;
    console.log(arr)
    const add=this.connectionserivce.registerData(arr);
    add.subscribe((para:any)=>{console.log("Success",para)})
    this.router.navigateByUrl("/login")
  }

  // get userid() {
  //   return this.registerForm.get('userid');
  // }
  get username() {
    return this.registerForm.get('username');
  }

  get useremail() {
    return this.registerForm.get('useremail');
  }
  
  get userpassword() {
    return this.registerForm.get('userpassword');
  }

}
