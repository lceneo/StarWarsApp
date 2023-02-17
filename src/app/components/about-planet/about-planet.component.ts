import {Component, OnInit} from '@angular/core';
import {IPlanet} from "../../models/IPlanet";
import {SharedInfoService} from "../../services/shared-info.service";

@Component({
  selector: 'app-about-planet',
  templateUrl: './about-planet.component.html',
  styleUrls: ['./about-planet.component.scss']
})
export class AboutPlanetComponent implements OnInit{
  constructor(public sharedInfoService: SharedInfoService) {}

  public planet: IPlanet;
  public gender: string = "All";

  ngOnInit(): void {
    this.planet = this.sharedInfoService.getPlanet();
  }

}
