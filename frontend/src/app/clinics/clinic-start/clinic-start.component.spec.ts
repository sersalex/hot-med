import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicStartComponent } from './clinic-start.component';

describe('ClinicStartComponent', () => {
  let component: ClinicStartComponent;
  let fixture: ComponentFixture<ClinicStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
