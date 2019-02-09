import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnAngularLoaderComponent } from './an-angular-loader.component';

describe('AnAngularLoaderComponent', () => {
  let component: AnAngularLoaderComponent;
  let fixture: ComponentFixture<AnAngularLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnAngularLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnAngularLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
