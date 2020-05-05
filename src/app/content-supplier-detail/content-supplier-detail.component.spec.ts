import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSupplierDetailComponent } from './content-supplier-detail.component';

describe('ContentSupplierDetailComponent', () => {
  let component: ContentSupplierDetailComponent;
  let fixture: ComponentFixture<ContentSupplierDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSupplierDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSupplierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
