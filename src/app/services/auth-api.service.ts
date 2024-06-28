import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { backend } from '../backend/backend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  baseUrl : string = '';
  constructor(private http: HttpClient) {
    if(backend.role == 0){
      this.baseUrl = 'https://localhost:7184/api';
    }else if(backend.role == 1){
      this.baseUrl = 'http://localhost:3000/api';
    }
  }
  
  loginAPI(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Account/login`, data);
  }
  registerAPI(data : any){
    return this.http.post(`${this.baseUrl}/Account/CreateAccount`, data);
  }
  getProfile(email : any): Observable<any> {
    return this.http.get(`${this.baseUrl}/Account/profile`, { params: { email} });
  }
  updateProfileImage(data: any){
    return this.http.post(`${this.baseUrl}/Account/updateImage`, data );
  }
  updateProfile(data:any){
    return this.http.post(`${this.baseUrl}/Account/updateData`, data);
  }
  featuredPropertiesAPI(data : any){
    return this.http.post<any[]>(`${this.baseUrl}/RealEstate/featuredProperties`,data)
  }
  addPropertyAPI(data: any){
    return this.http.post<any[]>(`${this.baseUrl}/RealEstate/property`, data);
  }
  getAllProperties(){
    return this.http.get(`${this.baseUrl}/RealEstate/getAllProperties`);
  }
  getProperty(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/RealEstate/getProperties`, { params: { id } });
  }
}