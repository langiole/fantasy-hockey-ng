import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FantasyService {

  constructor(private http: HttpClient) { }

  getFantasyTeams() {
    return this.http.get('https://fantasy.espn.com/apis/v3/games/fhl/seasons/2020/segments/0/leagues/40598003?view=mRoster&view=mTeam');
  }
}