import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoItemComponent } from './instrumento-item.component';

describe('InstrumentoItemComponent', () => {
  let component: InstrumentoItemComponent;
  let fixture: ComponentFixture<InstrumentoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentoItemComponent]
    });
    fixture = TestBed.createComponent(InstrumentoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
