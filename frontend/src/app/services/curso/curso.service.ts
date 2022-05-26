import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from 'src/app/models/curso/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  urlCurso = `${environment.urlApi}/curso`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Curso[]>(this.urlCurso);
  }

  getById(id: number) {
    return this.http.get<Curso>(`${this.urlCurso}/${id}`)
  }

  save(curso: Curso) {
    return this.http.post<Curso>(this.urlCurso, curso);
  }
}
