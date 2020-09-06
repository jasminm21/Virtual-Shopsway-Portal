import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {

    // console.log("search term "+searchTerm);
    // console.log("in pipe "+value.length);
    if(value.length === 0 || searchTerm == undefined){
      return value;
    }else{
      return value.filter(function(search){
        return search.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      })
    }
  }

}
