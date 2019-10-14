import { Component, OnInit } from '@angular/core'; 
import { FantasyService } from '../fantasy.service';


@Component({
  selector: 'app-fantasy-teams',
  templateUrl: './fantasy-teams.component.html',
  styleUrls: ['./fantasy-teams.component.css']
})
export class FantasyTeamsComponent implements OnInit {
  fantasyTeams = [];
  
  
  constructor(private fantasyService: FantasyService) {

  }

  ngOnInit() {
    document.body.style.background = '#EDEEF0';
    this.generateFantasyTeams();
  }

  generateFantasyTeams() {
    this.fantasyService.getFantasyTeams().subscribe(
      data => { 
        data['teams'].forEach(t => {
          var fantasyTeam = {
            "teamId" : t.id,
            "teamName" : t.location + ' ' + t.nickname,
            "owner" : t.owners[0],
            "roster" : []
          };

          t.roster.entries.forEach(p => {
            // find the player's stats index
            var i = p.playerPoolEntry.player.stats.findIndex(s => {
              return s.id == '002020';
            })
            var player = {
              "playerId" : p.playerPoolEntry.id,
              "fullName" : p.playerPoolEntry.player.fullName,
              "slot" : p.lineupSlotId,
              "stats" : {
                "stats" : p.playerPoolEntry.player.stats[i].stats,
                "fantasyPointsAvg" : parseFloat(p.playerPoolEntry.player.stats[i].appliedAverage.toFixed(1)),
                "fantasyPointsTotal" : parseFloat(p.playerPoolEntry.player.stats[i].appliedTotal.toFixed(1))
              },
              "ownership" : {
                "percentOwned" : parseFloat(p.playerPoolEntry.player.ownership.percentOwned.toFixed(1)),
                "percentChange" : parseFloat(p.playerPoolEntry.player.ownership.percentChange.toFixed(1))
              }
            };
            fantasyTeam.roster.push(player);
          });
          fantasyTeam.roster.sort((p1, p2) => {
            return p1.slot - p2.slot;
          });
          this.fantasyTeams.push(fantasyTeam);
        });
      },
      err => console.error(err),
    );
  }
}