import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SNgTestUtilsComponent } from './s-ng-test-utils.component';

describe('SNgTestUtilsComponent', () => {
  let component: SNgTestUtilsComponent;
  let fixture: ComponentFixture<SNgTestUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SNgTestUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SNgTestUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
