import { Injectable } from '@angular/core';
import {User} from '../shared/user'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {  throwError} from 'rxjs'
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = 'http://localhost:3000/user/';
  constructor(private http:HttpClient) { }

  createUser(user: User){
    return  this.http.post(this.apiUrl + 'register' , user, {responseType: 'json'}).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  loginUser(user:User){
    return this.http.post(this.apiUrl + 'login',user,{responseType: 'json'}).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
