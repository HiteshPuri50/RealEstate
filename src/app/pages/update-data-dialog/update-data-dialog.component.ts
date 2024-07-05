import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthApiService } from 'src/app/services/auth-api.service';

interface AccountType {
  value: string;
  viewValue: string;
}

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-data-dialog',
  templateUrl: './update-data-dialog.component.html',
  styleUrls: ['./update-data-dialog.component.css']
})
export class UpdateDataDialogComponent {
  userData:any;
  updateForm!: FormGroup;
  AccountType!: string;
  Types: AccountType[] = [
    { value: 'Owner', viewValue: 'Owner' },
    { value: 'Agent', viewValue: 'Agent' },
    { value: 'Broker', viewValue: 'Broker' },
  ];
  gender!: string;
  genders: Gender[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Prefer not Say', viewValue: 'Prefer not Say' },
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: {}, private fb : FormBuilder,
  private auth :AuthApiService, public dialogRef: MatDialogRef<UpdateDataDialogComponent>,) {
    this.userData = data;
    this.updateForm = this.fb.group(
      {
        email : this.userData.email,
        username: this.userData.username,
        gender : this.gender,
        age : Number(this.userData.age),
        accountType : this.AccountType
      })
   }
  onSubmit(data:any){
    console.log(data);
    console.log(this.updateForm.value);
    // this.auth.updateProfile(this.updateForm.value).subscribe(res=>{
    //   this.dialogRef.close();
    // }, err =>{
    //   console.log(err);
    // })
  }
}
