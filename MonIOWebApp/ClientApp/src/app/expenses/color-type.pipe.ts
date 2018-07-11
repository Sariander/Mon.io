import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorType'
})
export class ColorTypePipe implements PipeTransform {

  transform(value: number): string {
    if (value > 100) {
      return "warn";
    } else if (value >= 70) {
      return "accent";
    } else {
      return "primary";
    }
  }

}
