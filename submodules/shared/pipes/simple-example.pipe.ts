import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'simpleExamplePipe' })
export class SimpleExamplePipe implements PipeTransform {
  transform(value: any) {
    return 'Simple pipe transform';
  }
}
