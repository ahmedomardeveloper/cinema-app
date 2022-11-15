import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(protected _sanitizer: DomSanitizer) { }

  transform(value: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
