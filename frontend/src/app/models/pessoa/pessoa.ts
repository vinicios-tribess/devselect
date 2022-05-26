import { Curso } from './../curso/curso';
import { Endereco } from '../endereco/endereco';

export class Pessoa {
  idPessoa?: number;
  nomePessoa?: string;
  cpfPessoa?: string;
  rgPessoa?: string;

  cepEndereco?: string;
  logradouroEndereco?: string;
  numeroEndereco?: number;
  bairroEndereco?: string;
  cidadeEndereco?: string;
  estadoEndereco?: string;

  emailPessoa?: string;
  telefonePessoa?: string;
  dataNascPessoa?: any;
  generoPessoaPessoa?: string;
  matchesPessoa?: number;
  cursoPessoa?: Curso = new Curso({});
  caracteristicasPessoa? = new Array<String>();

  constructor(obj: Partial<Pessoa>) {
    Object.assign(this, obj);
  }
}
