import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanetService} from "../../services/planet.service";

@Component({
  selector: 'app-planet-cards',
  templateUrl: './planet-cards.component.html',
  styleUrls: ['./planet-cards.component.scss']
})
export class PlanetCardsComponent implements OnInit, OnDestroy {
  constructor(public planetService: PlanetService) {}

  public planetSearchStr: string = "";

  ngOnInit(): void {
    if(this.planetService.planets.length !== 0)
      return;
    this.planetService.getPlanetsWithResidents();
  }

  ngOnDestroy(): void {
    this.planetService.subscribtions.forEach(s => s.unsubscribe());
  }
}
