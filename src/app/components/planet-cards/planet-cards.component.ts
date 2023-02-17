import {Component, OnInit} from '@angular/core';
import {PlanetService} from "../../services/planet.service";
import {SharedInfoService} from "../../services/shared-info.service";

@Component({
  selector: 'app-planet-cards',
  templateUrl: './planet-cards.component.html',
  styleUrls: ['./planet-cards.component.scss']
})
export class PlanetCardsComponent implements OnInit {
  constructor(public planetService: PlanetService, public sharedInfoService: SharedInfoService) {}

  public planetSearchStr: string = "";

  ngOnInit(): void {
    if(this.planetService.planets.length !== 0)
      return;
    this.planetService.getPlanetsWithResidents();
  }
}
