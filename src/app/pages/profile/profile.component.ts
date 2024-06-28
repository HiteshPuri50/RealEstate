import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { UpdateDataDialogComponent } from '../update-data-dialog/update-data-dialog.component';
import { hide } from '@popperjs/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  email: string = '';
  userData : any;
  userImage !: any;
  username!: string;
  userProperties: any;
  constructor(private cookie: CookieService, private router : Router, private auth : AuthApiService,
    private dialog : MatDialog
  ){  }
  ngOnInit(){
    if(this.cookie.check('email')){
      this.email = this.cookie.get('email');
      this.username = this.cookie.get('username');
      this.auth.getProfile(this.email).subscribe(res=>{
        this.userData = res.userProfile[0];
        this.userProperties = res.Properties;
        console.log(this.userProperties);
      }, err=>{ 
        console.log(err);
      });
    } 
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files;
      console.log(file[0]);
        this.convertFileToBase64(file[0], (base64String: string) => {
          console.log(base64String);
          this.updateImage(base64String, this.email);
      });
    }
    console.log(this.userImage);
  }
  updateImage(image: string , email: string){
    let data = {
      image : image,
      email : email
    }
    this.auth.updateProfileImage(data).subscribe(res=>{
      console.log(res);
      this.ngOnInit();
    }, err =>{
      console.log(err);
    })
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
  updateData(){
    const dialogRef = this.dialog.open(UpdateDataDialogComponent, {
      height : '400px',
      width: '400px',
      data: this.userData,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userData = result;
      this.ngOnInit();
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateDataDialogComponent, {
      height : '400px',
      width: '400px',
      data: this.userData,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.userData = result;
      this.ngOnInit();
    });
  }
}
