import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnLoaderComponent } from './an-loader.component';

describe('AnLoaderComponent', () => {
  let component: AnLoaderComponent;
  let fixture: ComponentFixture<AnLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnLoaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
