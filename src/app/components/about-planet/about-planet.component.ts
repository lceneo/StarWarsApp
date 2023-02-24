import {Component, OnInit} from '@angular/core';
import {IPlanet} from "../../models/IPlanet";
import {ActivatedRoute} from "@angular/router";
import {PlanetService} from "../../services/planet.service";

@Component({
  selector: 'app-about-planet',
  templateUrl: './about-planet.component.html',
  styleUrls: ['./about-planet.component.scss']
})
export class AboutPlanetComponent implements OnInit{
  constructor(private planetService: PlanetService, private route: ActivatedRoute) {}

  public planet: IPlanet;
  public gender: string = "All";

  ngOnInit(): void {
    this.route.params.subscribe(p =>
        this.planet = this.planetService.planets[parseInt(p.id) - 1]);
  }
}
