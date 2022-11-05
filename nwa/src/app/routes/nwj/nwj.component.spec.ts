import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwjComponent } from './nwj.component';

describe('NwjComponent', () => {
  let component: NwjComponent;
  let fixture: ComponentFixture<NwjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
