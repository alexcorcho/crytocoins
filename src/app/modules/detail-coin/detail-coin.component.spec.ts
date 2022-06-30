import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCoinComponent } from './detail-coin.component';

describe('DetailCoinComponent', () => {
  let component: DetailCoinComponent;
  let fixture: ComponentFixture<DetailCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
