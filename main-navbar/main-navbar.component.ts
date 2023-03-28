import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ConnectionServiceService } from '../connection-service.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

   

  constructor(private breakpointObserver: BreakpointObserver,private connectionserivce:ConnectionServiceService) {}

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
}
