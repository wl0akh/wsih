import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNaveComponent } from './header-nave.component';

describe('HeaderNaveComponent', () => {
  let component: HeaderNaveComponent;
  let fixture: ComponentFixture<HeaderNaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
