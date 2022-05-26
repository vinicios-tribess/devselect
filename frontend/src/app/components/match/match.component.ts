import { CaracteristicaService } from './../../services/caracteristica/caracteristica.service';
import { Caracteristica } from './../../models/caracteristica/caracteristica';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  listaPessoas$ = new Observable<Pessoa[]>();
  listaCaract$ = new Observable<Caracteristica[]>();

  constructor(
    private pessoaService: PessoaService,
    private caracteristicaService: CaracteristicaService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.listaPessoas$ = this.pessoaService.getAll();
    // this.listaCaract$ = this.caracteristicaService.getAll();
  }
}
