import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionServiceService } from '../connection-service.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-updatepizza-tocart',
  templateUrl: './updatepizza-tocart.component.html',
  styleUrls: ['./updatepizza-tocart.component.css']
})
export class UpdatepizzaTocartComponent implements OnInit {
  cartform :FormGroup;
  constructor(private connectionserivce:ConnectionServiceService,private formbuilder:FormBuilder,private authservice:AuthService,private router:Router) { 
    this.cartform =this.formbuilder.group({
      pizzaid:new FormControl('',[Validators.required]),
      pizzaname: new FormControl('', [Validators.required]),
      pizzatype: new FormControl('',[Validators.required]),
      pizzaprice: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  pizzaid:number=0
  pizzaname:string="";
  pizzatype:string="";
  pizzaprice:number=0

  arr: any[] = [];

  addtocart(cartform:any){
    // console.log("cart")
    // let arr=this.cartform.value;
    // // const cart=this.authservice.updatePost(arr);
    // cart.subscribe(p=>{console.log(p)})
    // this.router.navigateByUrl('/pizza-service')
  }
}
