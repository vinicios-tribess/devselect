import { CursoService } from './../../services/curso/curso.service';
import { Curso } from './../../models/curso/curso';
import { ViaCepModel } from 'src/app/models/via-cep-modal/via-cep-model';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms-recrutador',
  templateUrl: './forms-recrutador.component.html',
  styleUrls: ['./forms-recrutador.component.scss'],
})
export class FormsRecrutadorComponent implements OnInit {
  formCadastro: ViaCepModel = {};
  formPessoa: Pessoa = new Pessoa({});
  formCurso: Curso = new Curso({});

  okInsert: boolean = false;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {}

  addCurso(curso: Curso) {
    this.cursoService.save(curso).subscribe((curso) => {
      if (!(typeof curso.idCurso == 'undefined') && curso.idCurso > 0) {
        this.okInsert = true;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Curso "${curso.idCurso} - ${curso.nomeCurso}" criado com sucesso!`,
          showConfirmButton: false,
          timer: 2500,
        });
        setTimeout(() => {
          this.okInsert = false;
          this.resetForm();
        }, 5000);
      }
    });
  }

  resetForm() {
    this.formCurso = new Curso({});
  }
}
