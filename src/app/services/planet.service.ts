import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {mergeMap, range, take} from "rxjs";
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
  private planetsPageCount: number = 6;
  private planetsParseFinished: boolean;
  private residentsPageCount: number = 9;
  private residents: IResident[] = [];

  public getPlanetsWithResidents(): void {
    this.isPending = true;
    this.planetsParseFinished = false;
    let requestStr = "https://swapi.dev/api/planets/";
    this.getResidents();
    range(1,this.planetsPageCount)
      .pipe(mergeMap(n => this.httpClient.get<IResponse>(`${requestStr}?page=${n}`)
        .pipe(take(1))))
      .subscribe(res =>{
        res.results.forEach(p => {
          (p as IPlanet).residents = [];
          this.planets.push(p as IPlanet);
        });
        if(this.planets.length === res.count){
          this.planets.sort((f,s) => this.parsePlanetId(f.url) - this.parsePlanetId(s.url));
          this.planetsParseFinished = true;
        }
      });
  }
  private getResidents(){
    let requestStr = "https://swapi.dev/api/people/";
    range(1, this.residentsPageCount)
      .pipe(mergeMap(n => this.httpClient.get<IResponse>(`${requestStr}?page=${n}`)
        .pipe(take(1))))
      .subscribe(res => {
        res.results.forEach(r => this.residents.push(r as IResident));
        if(this.residents.length === res.count) {
          const interval = setInterval(() => {
            if(this.planetsParseFinished) {
              this.residents.forEach(r => this.planets[this.parsePlanetId(r.homeworld) - 1].residents.push(r));
              this.isPending = false;
              clearInterval(interval);
            }
          }, 400);
        }
      })
  }
  private parsePlanetId(homeworldStr: string): number{
    return parseInt(homeworldStr.substring("https://swapi.dev/api/planets/".length));
  }
}
