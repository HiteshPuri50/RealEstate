import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthApiService } from 'src/app/services/auth-api.service';

interface ListedBy {
  value: string;
  viewValue: string;
}

interface propertyType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private auth : AuthApiService,
    private router : Router, private cookie : CookieService
  ) {
    if(!this.cookie.check('username')){
      this.router.navigate(['/login'])
    }
  }
  propertyType : string = '';
  listedBy : string = '';
  allList: ListedBy[] = [
    { value: 'Owner', viewValue: 'Owner' },
    { value: 'Agent', viewValue: 'Agent' },
    { value: 'broker', viewValue: 'Broker' }
  ]

  propertyTypes: ListedBy[] = [
    { value: 'Apartment', viewValue: 'Apartment' },
    { value: 'Villa', viewValue: 'Villa' },
    { value: 'Builder Floor', viewValue: 'Builder Floor' },
    { value: 'Residential Plots', viewValue: 'Residential Plots' },
    { value: 'Office', viewValue: 'Office' },
    { value: 'Shops', viewValue: 'Shops' },
    { value: 'Complex', viewValue: 'Complex' },
    { value: 'Commercial Plots', viewValue: 'Commercial Plots' },
    { value: 'Agriculture Plots', viewValue: 'Agriculture Plots' },
    { value: 'PG', viewValue: 'PG' },
  ]

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
    images: this.fb.array([]),       //Adding images in array
    listedBy: ['', Validators.required],
    owner: this.cookie.get('username')
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

    console.log(obj);
    this.auth.addPropertyAPI(obj).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
    })
  }
}
