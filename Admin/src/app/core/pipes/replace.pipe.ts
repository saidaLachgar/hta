import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
    transform(value: string, strToReplace: string, replacementStr: string): string {
        if (!value || !strToReplace || !replacementStr) return value;
        return value.toString().replace(new RegExp(strToReplace, 'g'), replacementStr);
    }
}