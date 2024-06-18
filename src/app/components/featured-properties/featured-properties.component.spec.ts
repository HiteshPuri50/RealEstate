import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPropertiesComponent } from './featured-properties.component';

describe('FeaturedPropertiesComponent', () => {
  let component: FeaturedPropertiesComponent;
  let fixture: ComponentFixture<FeaturedPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedPropertiesComponent]
    });
    fixture = TestBed.createComponent(FeaturedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
