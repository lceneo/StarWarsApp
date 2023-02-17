import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";
import {IPlanet} from "../models/IPlanet";
import {IResponse} from "../models/IResponse";
import {IResident} from "../models/IResident";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor( private httpClient: HttpClient) { }

  public planets: IPlanet[] = [];
  public isPending: boolean = false;
  private residents: IResident[] = [];

  public getPlanetsWithResidents(requestStr: string = "https://swapi.dev/api/planets/"): void {
    this.isPending = true;
    this.httpClient.get<IResponse>(requestStr)
      .pipe(take(1))
      .subscribe(res => {
        res.results.forEach(p => {
          (p as IPlanet).residents = [];
          this.planets.push(p as IPlanet);
        });
        if(res.next !== null)
          this.getPlanetsWithResidents(res.next);
        else
          this.getResidents();
      });
  }
  private getResidents(requestStr: string = "https://swapi.dev/api/people/"){
    this.httpClient.get<IResponse>(requestStr)
      .pipe(take(1))
      .subscribe(res => {
        res.results.forEach(r => this.residents.push(r as IResident));
        if(res.next !== null)
          this.getResidents(res.next);
        else {
          this.residents.forEach(r => this.planets[this.parsePlanetId(r.homeworld) - 1].residents.push(r));
          this.isPending = false;
        }
      });
  }
  private parsePlanetId(homeworldStr: string): number{
    return parseInt(homeworldStr.substring("https://swapi.dev/api/planets/".length));
  }
}
