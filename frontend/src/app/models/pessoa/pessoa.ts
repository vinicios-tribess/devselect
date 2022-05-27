import { Curso } from './../curso/curso';
import { Endereco } from '../endereco/endereco';

export class Pessoa {
  idPessoa?: number;
  nomePessoa?: string;
  cpfPessoa?: string;
  rgPessoa?: string;

  enderecoPessoa: Endereco = new Endereco({});

  emailPessoa?: string;
  telefonePessoa?: string;
  dataNascPessoa?: any;
  generoPessoa?: string;
  matchesPessoa?: number;
  cursoPessoa?: Curso = new Curso({});
  caracteristicasPessoa? = new Array<string>();

  constructor(obj: Partial<Pessoa>) {
    Object.assign(this, obj);
  }
}
