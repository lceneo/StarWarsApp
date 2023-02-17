import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetCardsComponent } from './components/planet-cards/planet-cards.component';
import {HttpClientModule} from "@angular/common/http";
import { AboutPlanetComponent } from './components/about-planet/about-planet.component';
import { GenderFilterPipe } from './pipes/gender-filter.pipe';
import {FormsModule} from "@angular/forms";
import { PlanetFilterPipe } from './pipes/planet-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanetCardsComponent,
    AboutPlanetComponent,
    GenderFilterPipe,
    PlanetFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
