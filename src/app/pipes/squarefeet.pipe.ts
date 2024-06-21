import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarefeet'
})
export class SquarefeetPipe implements PipeTransform {

  transform(value: number): string {
    return `${(value)} Sq. Ft.`;
  }

}
