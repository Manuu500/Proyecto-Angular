import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacionComponent } from './modalconfirmacion.component';

describe('ModalconfirmacionComponent', () => {
  let component: ModalConfirmacionComponent;
  let fixture: ComponentFixture<ModalConfirmacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmacionComponent]
    });
    fixture = TestBed.createComponent(ModalConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
