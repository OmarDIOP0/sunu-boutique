import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationServiceComponent } from './application-service.component';

describe('ApplicationServiceComponent', () => {
  let component: ApplicationServiceComponent;
  let fixture: ComponentFixture<ApplicationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
