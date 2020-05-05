import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSuppliersComponent } from './content-suppliers.component';

describe('ContentSuppliersComponent', () => {
  let component: ContentSuppliersComponent;
  let fixture: ComponentFixture<ContentSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
