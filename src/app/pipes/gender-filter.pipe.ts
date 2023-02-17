import { Pipe, PipeTransform } from '@angular/core';
import {IResident} from "../models/IResident";

@Pipe({
  name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

  transform(residents: IResident[], gender: string): IResident[] {
    if(gender === "All")
      return residents;
    return residents.filter(r => r.gender === gender.toLowerCase());
  }
}
