import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // 7801234567 -> +7801234567
    return `+${value}`;
  }

}
