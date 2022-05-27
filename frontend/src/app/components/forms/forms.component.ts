import { CursoService } from './../../services/curso/curso.service';
import { Curso } from 'src/app/models/curso/curso';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Endereco } from 'src/app/models/endereco/endereco';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { ViaCepService } from 'src/app/services/via-cep/via-cep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  listaCursos$ = new Observable<Curso[]>();

  showForm = new Subject<boolean>();

  curso$ = new Observable<Curso>();

  formPessoa: Pessoa = new Pessoa({});

  okInsert: boolean = false;

  /* SOFT SKILLS */
  arraySoftSkills = [
    'Comunicação', 'Criatividade', 'Trabalho em equipe', 'Escrita','Curiosidade',
    'Liderança', 'Flexibilidade', 'Colaboração','Inteligência Emocional','Organização',
    'Resiliência', 'Capacidade de Resolver Problemas','Trabalhar sob Pressão ', 'Negociação','Ética'
  ];

  /* HARD SKILLS */
  arrayHardSkills = [
    'HTML',
    'CSS',
    'Bootstrap',
    'Sass',
    'JavaScript',
    'React',
    'Angular',
    'Vue',
    'Java',
    'Spring Boot',
    'Python',
    'C#',
  ];

  softSkillsSelecionadas: string[] = [];
  hardSkillsSelecionadas: string[] = [];
  todasSkillsSelecionadas: string[] = [];

  constructor(
    private cepService: ViaCepService,
    private pessoaService: PessoaService,
    private cursoService: CursoService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.listaCursos$ = this.cursoService.getAll();
  }

  loadCurso(id: number) {
    this.curso$ = this.cursoService.getById(id);
    this.cursoService
      .getById(id)
      .subscribe(
        (response) => {
          console.log(response);
          this.formPessoa.cursoPessoa = response;
        }
      );

  }

  onChange(event: any) {
    const status = (event.target as HTMLSelectElement)?.value;
    console.log(status);
    if(status){
      this.loadCurso(parseInt(status))
    }
  }

  // API do BUSCA CEP com ENDEREÇO PESSOA
  getViaCEP(cep: FocusEvent) {
    if ((cep.target as HTMLInputElement)?.value) {
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      const cepResponse = this.cepService.getCep(inputCEP);
      cepResponse.subscribe((cepModel) => {
        this.formPessoa.enderecoPessoa = new Endereco({
          cepPessoa: cepModel.cep,
          logradouroPessoa: cepModel.logradouro,
          numeroPessoa: cepModel.numero,
          bairroPessoa: cepModel.bairro,
          cidadePessoa: cepModel.localidade,
          estadoPessoa: cepModel.uf,
        });
        this.showForm.next(true);
        console.log(this.formPessoa);
      });
    }
  }

  // Formatação de DATA
  getDateFormated(): any {
    const date = new Date();
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  // Adicionar candidato
  addPessoa(formPessoa: Pessoa) {

    if(!formPessoa.cursoPessoa?.idCurso) {
      return;
    }
        this.hardSkillsSelecionadas.forEach(element => {
          this.todasSkillsSelecionadas.push(element)
        });

        this.softSkillsSelecionadas.forEach(element => {
          this.todasSkillsSelecionadas.push(element)
        });

        console.log(this.todasSkillsSelecionadas);
        this.formPessoa.caracteristicasPessoa = this.todasSkillsSelecionadas;


        this.pessoaService.postPessoa(formPessoa).subscribe((pessoa) => {
          if (!(typeof pessoa.idPessoa == 'undefined') && pessoa.idPessoa > 0) {
            this.okInsert = true;
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Cadastro realizado com sucesso!',
              text: 'Em breve entraremos em contato com você.',
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
    this.formPessoa = new Pessoa({});
  }


}
