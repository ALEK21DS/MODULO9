import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'codigoAscii',
})

export class CambiarCodigoPipe implements PipeTransform {
  transform(value: string): string {
    let resultado = '';
    for (let i = 0; i < value.length; i++) {
      const codigoAscii = value.charCodeAt(i);
      resultado += codigoAscii + ' ';
    }
    return resultado.trim();
  }
}