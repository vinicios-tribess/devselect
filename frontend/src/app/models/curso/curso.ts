export class Curso {
  idCurso?: number;
  nomeCurso?: string;
  duracaoCurso?: string;
  localCurso?: string;
  quantidadeVagasCurso?: number;
  turnoCurso?: string;
  descricaoCursoCurso?: string;
  caracteristicasCurso? = new Array<string>();

  constructor(obj: Partial<Curso>) {
    Object.assign(this, obj);
  }
}
