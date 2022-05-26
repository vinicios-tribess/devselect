export class Endereco {
  cepEndereco?: string;
  logradouroEndereco?: string;
  numeroEndereco?: string;
  bairroEndereco?: string;
  cidadeEndereco?: string;
  estadoEndereco?: string;

  constructor(obj: Partial<Endereco>)
{
  Object.assign(this, obj);
}
}