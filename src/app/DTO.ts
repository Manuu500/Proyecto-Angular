import { Ingrediente } from "./model/ingrediente";

export class DTO {
  id!: number;
  nombre!: string;
  tipo!: string;
  id_usu!: number;
  ingredientes?: Ingrediente[]; // Puedes ajustar el tipo según lo que necesites


  // Puedes añadir más propiedades si es necesario
}
