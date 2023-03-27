import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHelloComponent } from './a-hello.component';
describe('AHelloComponent', () => {
  let component: AHelloComponent;
  let fixture: ComponentFixture<AHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AHelloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
