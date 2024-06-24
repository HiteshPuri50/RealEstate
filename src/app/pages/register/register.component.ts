import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupForm!: FormGroup; //Definate Assignment (ayega hi ayega)
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private auth: AuthApiService,
    private cookie : CookieService
  ) {
    if(this.cookie.check('username')){
      this.router.navigate(['/home']);
    }
    this.signupForm = this.fb.group(
      {
        username: [''],
        mobile: [],
        email: [''],
        password: ['']
      })
  }
  onSubmit() {
    if (this.signupForm.valid) {
      const formValue = this.signupForm.value;
      const payload = {
        ...formValue,
        mobile: Number(formValue.mobile) // Convert mobile to number
      };
      this.auth.registerAPI(payload).subscribe(res=>{
        this.router.navigate(['/login']);
        return res
      })
    }
  }
}