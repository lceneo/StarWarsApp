import { Injectable } from '@angular/core';
import {IPlanet} from "../models/IPlanet";

@Injectable({
  providedIn: 'root'
})
export class SharedInfoService {
  constructor() {}

  private planet: IPlanet;

  public setPlanet(planet: IPlanet){
    this.planet = planet;
  }
  public getPlanet(){
    return this.planet;
  }
}
