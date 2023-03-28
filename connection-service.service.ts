import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postpizzadata } from './postpizzadata';
import { postuserdata } from './postuserdata';
import { registerdata } from './registerdata';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {

  constructor(private httpclient:HttpClient) { }
  public registerData(user:registerdata): Observable<registerdata>{
    const contentType = {'content-Type':'application/json'}
    const jsonObj = JSON.stringify(user)
    console.log("within connection service")
    console.log(user)
    return this.httpclient.post<registerdata>("http://localhost:9001/api/v2/register",jsonObj, {'headers':contentType});
  }

  arr: any[] = [];
  getData():Observable<any>{
    return this.httpclient.get("http://localhost:9001/api/v2/getpizzamenu")
  }

  getuserData():Observable<any>{
    return this.httpclient.get("http://localhost:9001/api/v1/getAllUsers")
  }
  postuserdata(postuserdata:postuserdata):Observable<postuserdata>{
    const contentType = {'content-Type':'application/json'}
    const jsonObj = JSON.stringify(postuserdata)
    console.log("inside post authemnticate method")
    return this.httpclient.post<postuserdata>("http://localhost:9001/api/v1/loginAuthenticateUser",jsonObj,{'headers':contentType});
  }

  public updatePost(postdata:postpizzadata):Observable<postpizzadata> {
    const contentType = {'content-Type':'application/json'}
    const jsonObj = JSON.stringify(postdata)
    console.log("inside put method"+postdata)
    return this.httpclient.put<postpizzadata>("http://localhost:9001/api/v2/pizza/addpizza/punith@gmail.com", jsonObj,{'headers':contentType});

  }

  public getcartdata():Observable<any>{
    console.log("inside viewcart")
    return this.httpclient.get("http://localhost:9001/api/v2/pizza/getpizza/punith@gmail.com")
  }
}
