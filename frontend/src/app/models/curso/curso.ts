export class Curso {
  idCurso?: number;
  nomeCurso?: string;
  duracaoCurso?: string;
  localCurso?: string;
  quantidadeVagasCurso?: number;
  turnoCurso?: string;
  descricaoCursoCurso?: string;
  caracteristicasCurso? = Array<String>();

  constructor(obj: Partial<Curso>) {
    Object.assign(this, obj);
  }
}
