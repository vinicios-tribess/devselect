import { CursoService } from './../../services/curso/curso.service';
import { Curso } from './../../models/curso/curso';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms-recrutador',
  templateUrl: './forms-recrutador.component.html',
  styleUrls: ['./forms-recrutador.component.scss'],
})
export class FormsRecrutadorComponent implements OnInit {

  formCurso: Curso = new Curso({});

  softSkillsSelecionadas: string[] = [];
  hardSkillsSelecionadas: string[] = [];
  todasSkillsSelecionadas: string[] = [];

  okInsert: boolean = false;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {}

  addCurso(curso: Curso) {

        this.hardSkillsSelecionadas.forEach(element => {
          this.todasSkillsSelecionadas.push(element)
        });

        this.softSkillsSelecionadas.forEach(element => {
          this.todasSkillsSelecionadas.push(element)
        });

        console.log(this.todasSkillsSelecionadas);
        this.formCurso.caracteristicasCurso = this.todasSkillsSelecionadas;

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
