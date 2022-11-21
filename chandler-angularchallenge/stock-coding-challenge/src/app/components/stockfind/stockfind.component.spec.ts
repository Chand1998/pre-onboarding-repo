import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockfindComponent } from './stockfind.component';

describe('StockfindComponent', () => {
  let component: StockfindComponent;
  let fixture: ComponentFixture<StockfindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockfindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
