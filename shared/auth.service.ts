import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { postuserdata } from '../postuserdata';
import { postpizzadata } from '../postpizzadata';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:9001/api/v1/loginAuthenticateUser';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up
  signUp(user: postuserdata): Observable<any> {
    let api = 'http://localhost:9001/api/v1/register';
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  token:any;
  // Sign-in
  signIn(user: postuserdata) {
    localStorage.setItem("user",user.useremail);
    return this.http
      .post<any>('http://localhost:9001/api/v1/loginAuthenticateUser', user)
      .subscribe((res: any) => {
        this.token=res.token;
        console.log("result token"+res.token)
        localStorage.setItem('access_token', res.token);
        this.router.navigateByUrl('/pizza-service');
        // this.getUserProfile(res).subscribe((res) => {
        //   this.currentUser = res;
        //   this.router.navigateByUrl('/pizza-service');
        // });
      });
  }

  endpoint2: string = 'http://localhost:9001/api/v2/pizza/addpizza/';
  public updatePost(postdata:any):Observable<postpizzadata> {
   

    const contentType = {'content-Type':'application/json'}
    const jsonObj = JSON.stringify(postdata)
    console.log("inside put method  "+postdata +"email "+localStorage.getItem("user"))
    localStorage.setItem('access_token',this.token);
    let api=`${this.endpoint2}${localStorage.getItem("user")}`;
    console.log(api)
    alert("Pizza has been added successsfully to the cart")
    return this.http.put<postpizzadata>(api, jsonObj,{'headers':contentType});

  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  endpoint1: string = 'http://localhost:9001/api/v2/pizza/getpizza/';
  public getcartdata(email:any):Observable<postpizzadata>{
    console.log("inside viewcart function"+this.token  +"email "+email)
    localStorage.setItem('access_token', this.token);
    let api=`${this.endpoint1}${email}`
    return this.http.get<postpizzadata>(api);
  }


  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    console.log("token: "+authToken)
    return authToken !== null ? true : false;
    // return false;
  }
  doLogout() {
    localStorage.removeItem("user");
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigateByUrl("/login");
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}