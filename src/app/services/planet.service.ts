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
  private planetsPageCount: number = 6;
  private planetsParseFinished: boolean;
  private residentsPageCount: number = 9;
  private residents: IResident[] = [];

  public getPlanetsWithResidents(): void {
    this.isPending = true;
    this.planetsParseFinished = false;
    let currentPage = 1;
    let requestStr = "https://swapi.dev/api/planets/";
    this.getResidents();
    while(currentPage <= this.planetsPageCount) {
      this.httpClient.get<IResponse>(`${requestStr}?page=${currentPage}`)
        .pipe(take(1))
        .subscribe(res => {
          res.results.forEach(p => {
            (p as IPlanet).residents = [];
            this.planets.push(p as IPlanet);
          });
          if(this.planets.length === res.count) {
            this.planets.sort((f,s) => this.parsePlanetId(f.url) - this.parsePlanetId(s.url));
            this.planetsParseFinished = true;
          }
        });
      currentPage++;
    }
  }
  private getResidents(){
    let currentPage = 1;
    let requestStr = "https://swapi.dev/api/people/";
    while (currentPage <= this.residentsPageCount) {
      this.httpClient.get<IResponse>(`${requestStr}?page=${currentPage}`)
        .pipe(take(1))
        .subscribe(res => {
          res.results.forEach(r => this.residents.push(r as IResident));
          if(this.residents.length === res.count) {
              const interval = setInterval(() => {
                if(this.planetsParseFinished) {
                  this.residents.forEach(r => this.planets[this.parsePlanetId(r.homeworld) - 1].residents.push(r));
                  this.isPending = false;
                  clearInterval(interval);
                }
              }, 500);
          }
        });
      currentPage++;
    }
  }
  private parsePlanetId(homeworldStr: string): number{
    return parseInt(homeworldStr.substring("https://swapi.dev/api/planets/".length));
  }
}
