import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncePromoComponent } from './annonce-promo.component';

describe('AnnoncePromoComponent', () => {
  let component: AnnoncePromoComponent;
  let fixture: ComponentFixture<AnnoncePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnoncePromoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoncePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
