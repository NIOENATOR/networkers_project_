import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnwComponent } from './wnw.component';

describe('WnwComponent', () => {
  let component: WnwComponent;
  let fixture: ComponentFixture<WnwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WnwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WnwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
