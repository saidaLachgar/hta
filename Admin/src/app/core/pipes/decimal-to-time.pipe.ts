import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'decimalHourToTime' })
export class DecimalHourToTimePipe implements PipeTransform {
  transform(decimalHour: number): string {
    const totalSeconds = Math.floor(decimalHour * 3600);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${this.padWithZero(hours)}:${this.padWithZero(minutes)}:${this.padWithZero(seconds)}`;


  }
  private padWithZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
}