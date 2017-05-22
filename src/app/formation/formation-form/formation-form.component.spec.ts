import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormComponent } from './formation-form.component';

describe('FormationFormComponent', () => {
  let component: FormationFormComponent;
  let fixture: ComponentFixture<FormationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
