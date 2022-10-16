import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editModeIntoButtonText'
})
export class EditModeIntoButtonTextPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if(value === true){
      return "Save & Exit";
    }else{
      return "Edit";
    }
  }

}
