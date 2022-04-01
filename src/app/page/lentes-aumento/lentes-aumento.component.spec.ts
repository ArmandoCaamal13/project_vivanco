import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentesAumentoComponent } from './lentes-aumento.component';

describe('LentesAumentoComponent', () => {
  let component: LentesAumentoComponent;
  let fixture: ComponentFixture<LentesAumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LentesAumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LentesAumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
