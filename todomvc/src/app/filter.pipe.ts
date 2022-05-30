import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterType: any): any {
    switch (filterType) {
      case 'Active':
        return value.filter((item: { done: boolean }) => {
          return !item.done;
        });

      case 'Completed':
        return value.filter((item: { done: boolean }) => {
          return item.done;
        });

      default:
        return value;
    }
  }
}
