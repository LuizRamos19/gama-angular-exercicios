import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'yearBefore'
})
export class YearBeforePipe implements PipeTransform {

    transform(value: Number, ...args: any[]): any {
        return value < 2000 ? 'Antes dos anos 2000' : 'Depois dos anos 2000';
    }

}
