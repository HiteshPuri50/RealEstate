import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-update-data-dialog',
  templateUrl: './update-data-dialog.component.html',
  styleUrls: ['./update-data-dialog.component.css']
})
export class UpdateDataDialogComponent {
  userData:any;
  updateForm!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {}, private fb : FormBuilder, private auth :AuthApiService,
  public dialogRef: MatDialogRef<UpdateDataDialogComponent>,) {
    this.userData = data;
    this.updateForm = this.fb.group(
      {
        email : this.userData.email,
        username: this.userData.username,
        gender : this.userData.gender,
        age : Number(this.userData.age)
      })
    this.fetchData();
   }
  fetchData(){
    // console.log(this.updateForm.value);
  }
  onSubmit(){
    this.auth.updateProfile(this.updateForm.value).subscribe(res=>{
      this.dialogRef.close();
    }, err =>{
      console.log(err);
    })
  }
}
