import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNewGridComponent } from './content-new-grid.component';

describe('ContentNewGridComponent', () => {
  let component: ContentNewGridComponent;
  let fixture: ComponentFixture<ContentNewGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNewGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNewGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
