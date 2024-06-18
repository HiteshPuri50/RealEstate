import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup; //Definate Assignment (ayega hi ayega)
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group(
      {
        email: [''],
        password: ['']
      })
  }
  onSubmit() {
    this.http.post('http://localhost:3000/api/users/login', this.loginForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home'])
    });
  }
}
