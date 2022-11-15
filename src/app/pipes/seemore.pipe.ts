import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(overview: string, limit: number): string {
    return overview.substring(0, limit) + " ...";
  }

}
