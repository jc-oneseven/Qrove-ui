import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAndTechsComponent } from './tools-and-techs.component';

describe('ToolsAndTechsComponent', () => {
  let component: ToolsAndTechsComponent;
  let fixture: ComponentFixture<ToolsAndTechsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsAndTechsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsAndTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
