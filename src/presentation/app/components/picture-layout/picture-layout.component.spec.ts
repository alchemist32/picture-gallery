import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureLayoutComponent } from './picture-layout.component';

describe('PictureLayoutComponent', () => {
  let component: PictureLayoutComponent;
  let fixture: ComponentFixture<PictureLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictureLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
