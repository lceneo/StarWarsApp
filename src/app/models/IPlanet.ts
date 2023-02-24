import {IResident} from "./IResident";

export interface IPlanet {
  "id": number,
  "name": string,
  "rotation_period": string,
  "orbital_period": string,
  "diameter": string,
  "climate": string,
  "gravity": string,
  "terrain": string,
  "surface_water": string,
  "population": string,
  "residents": IResident[],
  "url": string;
}
