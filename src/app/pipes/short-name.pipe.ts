import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    const nameParts = value.split(' ');
    let initials = '';
    nameParts.forEach(part => {
        if (part.length > 0) {
            initials += part[0].toUpperCase();
        }
    });
    return initials;
  }
}
