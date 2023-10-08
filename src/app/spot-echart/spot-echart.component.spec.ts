import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotEchartComponent } from './spot-echart.component';

describe('SpotEchartComponent', () => {
  let component: SpotEchartComponent;
  let fixture: ComponentFixture<SpotEchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotEchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
