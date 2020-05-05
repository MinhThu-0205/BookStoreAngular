import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNewDetailComponent } from './content-new-detail.component';

describe('ContentNewDetailComponent', () => {
  let component: ContentNewDetailComponent;
  let fixture: ComponentFixture<ContentNewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
