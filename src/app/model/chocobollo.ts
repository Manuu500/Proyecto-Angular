import { Ingrediente } from "./ingrediente";

export interface Chocobollo {
  id: number;
  id_usu: number;
  nombre: string;
  tipo: string;
  ingredientes: Ingrediente[]; // Now expects an array of Ingrediente

}
