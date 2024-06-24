import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { backend } from '../backend/backend';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  baseUrl : string = '';
  constructor(private http: HttpClient, private router: Router) {
    if(backend.role == 0){
      this.baseUrl = 'https://localhost:7184/api';
    }else if(backend.role == 1){
      this.baseUrl = 'http://localhost:3000/api';
    }
  }
  
  loginAPI(data: any) {
    return this.http.post(`${this.baseUrl}/users/login`, data);
  }
  registerAPI(data : any){
    return this.http.post(`${this.baseUrl}/Account/CreateAccount`, data);
  }
  featuredPropertiesAPI(data : any){
    return this.http.post<any[]>(`${this.baseUrl}/featuredProperties`,data)
  }
  addPropertyAPI(data: any){
    return this.http.post<any[]>(`${this.baseUrl}/property`, data);
  }
  getAllProperties(){
    return this.http.get(`${this.baseUrl}/getAllProperties`);
  }
}