import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `他的名字是：` + value;
  }
}
