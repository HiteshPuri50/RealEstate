import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupForm!: FormGroup; //Definate Assignment (ayega hi ayega)
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.signupForm = this.fb.group(
      {
        username: [''],
        mobile: [''],
        email: [''],
        password: ['']
      })
  }
  onSubmit() {
    this.http.post('http://localhost:3000/api/users/signup', this.signupForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/login'])
    }, err => {
      console.log(err);
    });
  }
}