import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case 'casa': return 'home';
      case 'investimento': return 'savings';
      case 'recreação': return 'beach_access';
    }
    return 'remove';
  }

}
