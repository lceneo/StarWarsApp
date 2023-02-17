import { Pipe, PipeTransform } from '@angular/core';
import {IPlanet} from "../models/IPlanet";

@Pipe({
  name: 'planetFilter'
})
export class PlanetFilterPipe implements PipeTransform {

  transform(planets: IPlanet[], searchStr: string = ""): IPlanet[] {
      return searchStr === "" ? planets : planets.filter(p => p.name.toLowerCase().startsWith(searchStr.toLowerCase()));
    }
  }
