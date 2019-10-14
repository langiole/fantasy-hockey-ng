import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-fantasy-team-table',
  templateUrl: './fantasy-team-table.component.html',
  styleUrls: ['./fantasy-team-table.component.css']
})
export class FantasyTeamTableComponent implements OnInit {

  @Input() roster;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['slot', 'fullName', 'percentOwned', 'percentChange', 'fantasyPointsTotal', 'fantasyPointsAvg'];
  avg = (arr) => arr.reduce((acc, val) => acc + val) / arr.length;

  constructor() { }

  ngOnInit() {
    console.log(this.roster);
    this.dataSource = new MatTableDataSource(this.roster);
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'percentOwned': return item.ownership.percentOwned;
        case 'percentChange': return item.ownership.percentChange;
        case 'fantasyPointsTotal': return item.stats.fantasyPointsTotal;
        case 'fantasyPointsAvg': return item.stats.fantasyPointsAvg;
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  getPercentOwnedAvg() {
    return this.avg(this.roster.map(p => p.ownership.percentOwned)).toFixed(1);
  }

  getPercentChangeAvg() {
    return this.avg(this.roster.map(p => p.ownership.percentChange)).toFixed(1);
  }

  getFantasyPointsTotalAvg() {
    return this.avg(this.roster.map(p => p.stats.fantasyPointsTotal)).toFixed(1);
  }

  getFantasyPointsAvgAvg() {
    return this.avg(this.roster.map(p => p.stats.fantasyPointsAvg)).toFixed(1);
  }

  getTextColor(val) {
    return (val > 0) ? ('rgb(86,171,47)') : (val < 0 ? ('rgb(213, 35, 32)') : ('rgb(0, 0, 0)'));
  }
}
