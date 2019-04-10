import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographieVideoComponent } from './photographie-video.component';

describe('PhotographieVideoComponent', () => {
  let component: PhotographieVideoComponent;
  let fixture: ComponentFixture<PhotographieVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographieVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographieVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
