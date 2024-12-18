import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyArrivedComponent } from './recently-arrived.component';

describe('RecentlyArrivedComponent', () => {
  let component: RecentlyArrivedComponent;
  let fixture: ComponentFixture<RecentlyArrivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentlyArrivedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyArrivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
