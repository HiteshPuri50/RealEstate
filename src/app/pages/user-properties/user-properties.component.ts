import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-properties',
  templateUrl: './user-properties.component.html',
  styleUrls: ['./user-properties.component.css']
})
export class UserPropertiesComponent {
  constructor(private router : Router){}
  @Input() properties: any[] = [];
  reduceLength(text : string){
    if (text.length <= 100) {
      return text;
    }
    return text.slice(0, 100) + '...';
  }
  reduceLengthHead(text : string){
    if (text.length <= 30) {
      return text;
    }
    return text.slice(0, 24);
  }
  onclick(id: number){
    this.router.navigate(['property-detail', id])
  }
}