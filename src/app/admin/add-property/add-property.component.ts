import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private auth : AuthApiService,
    private router : Router
  ) { }
  propertyAddressFormGroup = this.fb.group({
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    country: ['', Validators.required],
  });
  propertyDetail = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    propertyType: ['', Validators.required],
    squareFeet: ['', Validators.required],
    bedrooms: ['', Validators.required],
    bathrooms: ['', Validators.required],
    price: ['', Validators.required],
    address: this.fb.group({}),
    images: this.fb.array([])       //Adding images in array
  })
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files: FileList = input.files;
      const imageArray = this.propertyDetail.get('images') as FormArray;

      Array.from(files).forEach(file => {
        this.convertFileToBase64(file, (base64String: string) => {
          imageArray.push(this.fb.control(base64String));
        });
      });
    }
  }
  convertFileToBase64(file: File, callback: (base64String: string) => void): void {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const base64String = reader.result.split(',')[1];
        callback(base64String);
      } else {
        console.error('Failed to read the file as a string');
        callback('');
      }
    };
    reader.onerror = (error) => {
      console.error('Error converting file:', error);
      callback('');
    };
    reader.readAsDataURL(file);
  }
  Property() {
    const obj = this.propertyDetail.value
    obj.address = this.propertyAddressFormGroup.value;

    this.auth.addPropertyAPI(obj).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
    })
  }
}
