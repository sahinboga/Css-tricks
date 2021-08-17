import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAndSidebarComponent } from './articles-and-sidebar.component';

describe('ArticlesAndSidebarComponent', () => {
  let component: ArticlesAndSidebarComponent;
  let fixture: ComponentFixture<ArticlesAndSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesAndSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAndSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
