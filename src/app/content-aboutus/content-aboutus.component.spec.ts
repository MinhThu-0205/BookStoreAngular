import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAboutusComponent } from './content-aboutus.component';

describe('ContentAboutusComponent', () => {
  let component: ContentAboutusComponent;
  let fixture: ComponentFixture<ContentAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
