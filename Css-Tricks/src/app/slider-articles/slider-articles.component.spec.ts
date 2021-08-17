import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderArticlesComponent } from './slider-articles.component';

describe('SliderArticlesComponent', () => {
  let component: SliderArticlesComponent;
  let fixture: ComponentFixture<SliderArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
