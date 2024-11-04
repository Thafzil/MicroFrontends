import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldItemsComponent } from './field-items.component';

describe('FieldItemsComponent', () => {
  let component: FieldItemsComponent;
  let fixture: ComponentFixture<FieldItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
