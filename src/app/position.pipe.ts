import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0:
        return 'C';
      case 1:
        return 'LW';
      case 2:
        return 'RW';
      case 4:
        return 'D';
      case 5:
        return 'G';
      case 6:
        return 'UTIL';
      case 7:
        return 'Bench';
      default:
        return 'null';
    }
  }
}