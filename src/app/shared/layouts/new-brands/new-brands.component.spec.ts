import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrandsComponent } from './new-brands.component';

describe('NewBrandsComponent', () => {
  let component: NewBrandsComponent;
  let fixture: ComponentFixture<NewBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
