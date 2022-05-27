export class Endereco {
  cepPessoa?: string;
  logradouroPessoa?: string;
  numeroPessoa?: number;
  bairroPessoa?: string;
  cidadePessoa?: string;
  estadoPessoa?: string;

  constructor(obj: Partial<Endereco>)
{
  Object.assign(this, obj);
}
}