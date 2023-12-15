import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociLinksComponent } from './soci-links.component';

describe('SociLinksComponent', () => {
  let component: SociLinksComponent;
  let fixture: ComponentFixture<SociLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
