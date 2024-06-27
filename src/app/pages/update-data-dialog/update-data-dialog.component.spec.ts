import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDataDialogComponent } from './update-data-dialog.component';

describe('UpdateDataDialogComponent', () => {
  let component: UpdateDataDialogComponent;
  let fixture: ComponentFixture<UpdateDataDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDataDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
