import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyTeamTableComponent } from './fantasy-team-table.component';

describe('FantasyTeamTableComponent', () => {
  let component: FantasyTeamTableComponent;
  let fixture: ComponentFixture<FantasyTeamTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasyTeamTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasyTeamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
