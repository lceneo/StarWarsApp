import {IPlanet} from "./IPlanet";
import {IResident} from "./IResident";

export interface IResponse{
  "results": IPlanet[] | IResident[];
  "next": string;
  "previous": string;
}
