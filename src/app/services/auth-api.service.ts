import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { backend } from '../backend/backend';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  baseUrl : string = '';
  constructor(private http: HttpClient, private cookie : CookieService,private router : Router) {
    if(backend.role == 0){
      this.baseUrl = 'https://localhost:7184/api';
    }else if(backend.role == 1){
      this.baseUrl = 'http://localhost:3000/api';
    }
  }

  signOut() {
    google.accounts.id.sisableAutoSelect();
    this.cookie.deleteAll();
    this.router.navigate(['/login']);  // Redirect to login page after logout
  }
  
  loginAPI(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Account/login`, data);
  }
  registerAPI(data : any){
    return this.http.post(`${this.baseUrl}/Account/CreateAccount`, data);
  }
  getProfile(email : any): Observable<any> {
    // console.log(data);
    return this.http.get(`${this.baseUrl}/Account/profile`, {params : {email}});
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
  getFilter(data: any){
    return this.http.post(`${this.baseUrl}/RealEstate/filterProperties`, data);
  }
  getShortListPropertyId(data: any){
      return this.http.post(`${this.baseUrl}/RealEstate/shortListPropertyId`, data);
  }
  getShortListProperty(data: any){
    return this.http.post(`${this.baseUrl}/RealEstate/shortListProperty`, data);
}
}