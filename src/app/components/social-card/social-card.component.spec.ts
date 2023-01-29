import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCardComponent } from './social-card.component';

describe('SocialCardComponent', () => {
  let component: SocialCardComponent;
  let fixture: ComponentFixture<SocialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
