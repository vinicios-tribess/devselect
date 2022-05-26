import { environment } from './../../../environments/environment';
import { Caracteristica } from './../../models/caracteristica/caracteristica';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaracteristicaService {
  urlCaracteristica = `${environment.urlApi}/caracteristica`;

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get<Caracteristica[]>(this.urlCaracteristica);
  }
}
