import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient, private router: Router) { }
  private baseUrl = 'http://localhost:3000/api';
  loginAPI(data: any) {
    return this.http.post(`${this.baseUrl}/users/login`, data);
  }
  registerAPI(data : any){
    return this.http.post(`${this.baseUrl}/users/signup`, data);
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