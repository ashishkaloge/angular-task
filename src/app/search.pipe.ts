import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, serchByName:any): any {
    if(!serchByName){
      return value;
    } 

    return value.filter((item:any)=>{
     return item.name.toLowerCase().indexOf(serchByName.toLowerCase())>-1
    })
  }

}
