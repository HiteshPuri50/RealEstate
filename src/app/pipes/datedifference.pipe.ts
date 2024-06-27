import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datedifference'
})
export class DatedifferencePipe implements PipeTransform {

  transform(isoDateStr: string): string {
    // Parse the input date string
    const inputDate = new Date(isoDateStr);
  
    // Get today's date
    const today = new Date();
  
    // Calculate the difference in milliseconds
    const differenceInMs = today.getTime() - inputDate.getTime();
  
    // Calculate the difference in various units
    const msInOneDay = 24 * 60 * 60 * 1000;
    const msInOneWeek = msInOneDay * 7;
    const msInOneMonth = msInOneDay * 30; // Approximation
    const msInOneYear = msInOneDay * 365; // Approximation
  
    const daysDifference = Math.floor(differenceInMs / msInOneDay);
    const weeksDifference = Math.floor(differenceInMs / msInOneWeek);
    const monthsDifference = Math.floor(differenceInMs / msInOneMonth);
    const yearsDifference = Math.floor(differenceInMs / msInOneYear);
  
    // Determine the appropriate unit to return
    if (yearsDifference >= 1) {
      return `${yearsDifference} year(s)`;
    } else if (monthsDifference >= 1) {
      return `${monthsDifference} month(s)`;
    } else if (weeksDifference >= 1) {
      return `${weeksDifference} week(s)`;
    } else {
      return `${daysDifference} day(s)`;
    }
  }
  
  

}
