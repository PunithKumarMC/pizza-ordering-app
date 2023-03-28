import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionServiceService } from '../connection-service.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  constructor(private connectionserivce:ConnectionServiceService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.connectionserivce.getData().subscribe(p=>{
      this.pizzadata=p;
   });

   this.viewcart();
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
    this.authservice.getcartdata(localStorage.getItem("user")).subscribe(p=>this.cart=p);
    // alert("scroll down to view your cart")
  }
  logout(){
    this.authservice.doLogout();
  }
}
