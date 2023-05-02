import { AiResponseComponent } from './ai-response.component';
// eslint-disable-next-line import/no-unresolved
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AiResponseComponent', () => {
  let component: AiResponseComponent;
  let fixture: ComponentFixture<AiResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiResponseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AiResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
