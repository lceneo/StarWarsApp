import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetCardsComponent} from "./components/planet-cards/planet-cards.component";
import {AboutPlanetComponent} from "./components/about-planet/about-planet.component";


const routes: Routes = [
  {path: "", redirectTo: "planets", pathMatch: "full"},
  {path: "planets", component: PlanetCardsComponent},
  {path: "planets/:id", component: AboutPlanetComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
