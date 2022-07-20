import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetCodeAreaComponent } from './leet-code-area.component';

describe('LeetCodeAreaComponent', () => {
  let component: LeetCodeAreaComponent;
  let fixture: ComponentFixture<LeetCodeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeetCodeAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeetCodeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
