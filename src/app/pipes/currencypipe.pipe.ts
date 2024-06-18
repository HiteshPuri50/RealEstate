import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencypipe'
})
export class CurrencypipePipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} Lakh`;
    } else {
      return `₹${value}`;
    }
  }

}
