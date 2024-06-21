import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupForm!: FormGroup; //Definate Assignment (ayega hi ayega)
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private auth: AuthApiService) {
    this.signupForm = this.fb.group(
      {
        username: [''],
        mobile: [''],
        email: [''],
        password: ['']
      })
  }
  onSubmit() {
    this.auth.registerAPI(this.signupForm.value).subscribe(res=>{
      this.router.navigate(['/login']);
      return res
  })
  }
}