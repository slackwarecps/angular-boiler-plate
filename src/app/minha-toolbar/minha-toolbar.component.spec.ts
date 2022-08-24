import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaToolbarComponent } from './minha-toolbar.component';

describe('MinhaToolbarComponent', () => {
  let component: MinhaToolbarComponent;
  let fixture: ComponentFixture<MinhaToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
