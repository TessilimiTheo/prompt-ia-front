import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPromptListComponent } from './last-prompt-list.component';

describe('LastPromptListComponent', () => {
  let component: LastPromptListComponent;
  let fixture: ComponentFixture<LastPromptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastPromptListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPromptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
