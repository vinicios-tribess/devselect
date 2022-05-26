import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRecrutadorComponent } from './forms-recrutador.component';

describe('FormsRecrutadorComponent', () => {
  let component: FormsRecrutadorComponent;
  let fixture: ComponentFixture<FormsRecrutadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsRecrutadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRecrutadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
