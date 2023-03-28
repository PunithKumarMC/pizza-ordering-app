import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ConnectionServiceService } from '../connection-service.service';
import { PizzaAuthGuard } from '../pizza-auth.guard';
import { PizzaServiceComponent } from '../pizza-service/pizza-service.component';
import { postuserdata } from '../postuserdata';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  useremail='';
  userpassword="";
  parentposts:any[]=[];
  loginform:FormGroup
  constructor(private formbuilder: FormBuilder,private connectionserivce:ConnectionServiceService,private guard:PizzaAuthGuard,private router: Router,private authguard:AuthGuard,private authservice:AuthService) {
    this.loginform = this.formbuilder.group({
      useremail: new FormControl('', [Validators.required]),
      userpassword: new FormControl('',[Validators.required])
    });
   }
   
  ngOnInit(): void {
    
  }
  arr: any[] = [];

  // verifyingdata() {
  //   let arr=this.loginform.value;
  //   console.log("inside verifying data");
  //   this.connectionserivce.postuserdata(arr);
  //   this.router.navigateByUrl('');
  // }
 
  verifyingdata() {
    
    console.log("inside verifying data");
    this.connectionserivce.getuserData().subscribe(p=>{
    console.log(p.length+"ddd")
    for (var i = 0; i <= p.length; i++) {
      for (var key in p[i]) {
        if (this.loginform.value.useremail && this.loginform.value.userpassword == p[i][key]) {
          this.useremail=this.loginform.value.useremail;
          this.authservice.signIn(this.loginform.value);
          // this.authguard.authService.isLoggedIn;
          // this.guard.isvalid=true;
          // this.router.navigateByUrl('')
        }
      }
    }
    })
  }

  sendemail():any{
    return this.loginform.value;
  }


  // loginUser() {
  //   this.authservice.signIn(this.loginform.value);
  // }
 

}
