import { Component, ElementRef, ViewChild } from '@angular/core';

interface Budget {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  selectedBudget!: number;
  budgets: Budget[] = [
    { value: '5000', viewValue: '500000' },
    { value: '10000', viewValue: '10000' },
    { value: '15000', viewValue: '15000' },
    { value: '20000', viewValue: '20000' },
    { value: '25000', viewValue: '25000' },
    { value: '30000', viewValue: '30000' },
    { value: '35000', viewValue: '35000' },
    { value: '40000', viewValue: '40000' },
    { value: '45000', viewValue: '45000' },
    { value: '50000', viewValue: '50000' },
    { value: '55000', viewValue: '55000' },
    { value: '60000', viewValue: '60000' },
  ];
  Coordinates: any;
  bannerHeading: HTMLElement | null | undefined;
  ngAfterViewInit() {
    // Ensure the heading is initially centered or at a desired position
    // this.updatePosition(window.innerWidth / 2, window.innerHeight / 2);
  }
  MoveContent(e: any) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    this.Coordinates = coor;
    this.updatePosition(x, y);
  }
  updatePosition(x: number, y: number) {
    this.bannerHeading = document.getElementById('bannerHeading');
    if (this.bannerHeading) {
      const translateX = (x - window.innerWidth) / 50; // Dividing by 10 is just for adjusting the movement sensitivity
      const translateY = (y - window.innerHeight) / 50;

      // Calculate rotation values
      const rotateX = (y - window.innerHeight) / 50; // Adjust rotation sensitivity as needed
      const rotateY = (x - window.innerWidth) / 50;
      // this.Coordinates = `transform: translate(${translateX}px, ${translateY}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg);`;
      this.bannerHeading.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
  }
  onEnter(formValue: any) {
    const searchTerm = formValue.search;
    console.log('Search Term:', searchTerm);
  }
}
// style="translate: none; rotate: none; scale: none; transform: translate(30.2778px, 49.4269px) rotateY(3.02778deg) rotateX(-4.94269deg);"