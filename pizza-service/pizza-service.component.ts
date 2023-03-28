import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionServiceService } from '../connection-service.service';
import { LoginPageComponent } from '../login-page/login-page.component';
import { pizzamenu } from '../pizzamenu';
import { postpizzadata } from '../postpizzadata';
import { postuserdata } from '../postuserdata';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-pizza-service',
  templateUrl: './pizza-service.component.html',
  styleUrls: ['./pizza-service.component.css']
})
export class PizzaServiceComponent implements OnInit {

  
  constructor(private connectionserivce:ConnectionServiceService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.connectionserivce.getData().subscribe(p=>{
      this.pizzadata=p;
   });
  }

  pizzaid:number=0;
  pizzaname:string="";
  regularprice:string="";
  mediumprice:string="";
  largeprice:string="";
  
  pizzadata:any;

  cart:any;
  pizzaprice:number=0;
  pizzatype:string="";

  

  viewcart(){
    // this.authservice.getcartdata(localStorage.getItem("user")).subscribe(p=>this.cart=p);
    // alert("scroll down to view your cart")
    this.router.navigateByUrl("/viewcart");
  }

  logout(){
    this.authservice.doLogout();
  }
  pp : postpizzadata = new postpizzadata;
  addcart(piz:pizzamenu){
    this.pp.pizzaid = 1;
    this.pp.pizzaname = piz.pizzaname;
    this.pp.pizzatype = "larger"
    this.pp.pizzaprice = parseInt(piz.largeprice);
    const cart=this.authservice.updatePost(this.pp);
    cart.subscribe(p=>{console.log(p)})

    
  }
  
  
}

