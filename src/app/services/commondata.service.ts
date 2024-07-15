import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {

  constructor() { }
  userData!: Object;
  private shortListedPropertiesSource = new BehaviorSubject<any[]>(this.getStoredShortListedProperties());
  shortListedProperties$ = this.shortListedPropertiesSource.asObservable();

  setShortListedProperties(properties: any[]) {
    localStorage.setItem('shortListedProperties', JSON.stringify(properties));
    this.shortListedPropertiesSource.next(properties);
  }

  private getStoredShortListedProperties(): any[] {
    const storedProperties = localStorage.getItem('shortListedProperties');
    return storedProperties ? JSON.parse(storedProperties) : [];
  }
}
