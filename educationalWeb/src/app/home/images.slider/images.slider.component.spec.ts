import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Images.SliderComponent } from './images.slider.component';

describe('Images.SliderComponent', () => {
  let component: Images.SliderComponent;
  let fixture: ComponentFixture<Images.SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Images.SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Images.SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
