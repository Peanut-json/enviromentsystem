import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanDisplayComponent } from './kanban-display.component';

describe('KanbanDisplayComponent', () => {
  let component: KanbanDisplayComponent;
  let fixture: ComponentFixture<KanbanDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanDisplayComponent]
    });
    fixture = TestBed.createComponent(KanbanDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
