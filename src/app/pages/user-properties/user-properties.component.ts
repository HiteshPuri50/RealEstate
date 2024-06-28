import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-properties',
  templateUrl: './user-properties.component.html',
  styleUrls: ['./user-properties.component.css']
})
export class UserPropertiesComponent {
  @Input() properties: any[] = [];
}
