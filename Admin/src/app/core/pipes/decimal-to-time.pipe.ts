import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'decimalHourToTime' })
export class DecimalHourToTimePipe implements PipeTransform {
  transform(decimalHour: number, format: string = 'hh:mm:ss'): string {
    const totalSeconds = Math.floor(decimalHour * 3600);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (format === 'hh:mm:ss') {
      return `${this.padWithZero(hours)}:${this.padWithZero(minutes)}:${this.padWithZero(seconds)}`;
    } else{
      return  (hours > 0 ? `${hours}h ` : '') +
      (minutes > 0 ? `${minutes}min ` : '') +
      (seconds > 0 ? `${seconds}s` : '');
    }
  }

  private padWithZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
}