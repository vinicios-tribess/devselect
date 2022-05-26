import { Categoria } from "../categoria/categoria";
export class Caracteristica {
  idCaracteristica?: number;
  descricaoCaracteristica?: string;
  categoriaCaracteristica: Categoria = new Categoria();
}
