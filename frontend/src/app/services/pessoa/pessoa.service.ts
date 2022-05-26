import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  urlApiPaciente = `${environment.urlApi}/pessoa`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Pessoa[]>(this.urlApiPaciente)
  }

  getById(id: number) {
    return this.http.get<Pessoa>(`${this.urlApiPaciente}/id`);
  }

  postPessoa(pessoa: Pessoa)
  {
    return this.http.post<Pessoa>(this.urlApiPaciente, pessoa);
  }

}