import { Is } from "../isModel";
import { liste } from "./db";

export class Model{
  isim:string;
  liste:Is[];
  constructor(isim:string){
    this.isim=isim
    this.liste=liste
  }
}
