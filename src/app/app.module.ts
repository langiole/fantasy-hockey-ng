import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FantasyTeamsComponent } from './fantasy-teams/fantasy-teams.component';
import { FantasyService } from './fantasy.service';
import { HttpClientModule } from '@angular/common/http';
import { PositionPipe } from './position.pipe';
import { FantasyTeamTableComponent } from './fantasy-team-table/fantasy-team-table.component';

@NgModule({
imports:      [ BrowserModule, FormsModule,
              RouterModule.forRoot([
                { path: 'fantasy/teams', component: FantasyTeamsComponent }
              ]),
              HttpClientModule,
              MatTableModule,
              MatSortModule,
              BrowserAnimationsModule
            ],
  declarations: [ AppComponent, FantasyTeamsComponent, PositionPipe, FantasyTeamTableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FantasyService]
})
export class AppModule { }
