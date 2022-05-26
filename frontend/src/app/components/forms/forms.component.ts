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

  formPessoa: Pessoa = new Pessoa({});

  okInsert: boolean = false;

  /* SOFT SKILLS */
  arraySoftSkills = [
    'Comunicativo',
    'Criativo',
    'Trabalho em equipe',
    'Quieto',
    'Curioso',
    'Trabalho melhor sozinho',
  ];

  softSkillsDesejadas = ['Comunicativo', 'Quieto', 'Criativo'];

  softSkillsSelecionadas: string[] = [];

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

  /* SOFT SKILLS */
  onClickSoftSkill(skill: string): void {
    if (this.softSkillsSelecionadas.indexOf(skill) === -1) {
      this.softSkillsSelecionadas.push(skill);
    } else {
      this.softSkillsSelecionadas = this.softSkillsSelecionadas.filter(
        (x) => x !== skill
      );
    }
  }

  getSoftSkillStyle(skill: string): string {
    if (this.softSkillsSelecionadas.indexOf(skill) !== -1) {
      return 'btn-selecionada';
    }

    return 'btn-nao-selecionada';
  }

  /* HARD SKILLS */

  onClickHardSkill(skill: string): void {
    if (this.hardSkillsSelecionadas.indexOf(skill) === -1) {
      this.hardSkillsSelecionadas.push(skill);
    } else {
      this.hardSkillsSelecionadas = this.hardSkillsSelecionadas.filter(
        (x) => x !== skill
      );
    }
  }

  getHardSkillStyle(skill: string): string {
    if (this.hardSkillsSelecionadas.indexOf(skill) !== -1) {
      return 'btn-selecionada';
    }

    return 'btn-nao-selecionada';
  }

  // API do BUSCA CEP com ENDEREÇO PESSOA
  // getViaCEP(cep: FocusEvent) {
  //   if ((cep.target as HTMLInputElement)?.value) {
  //     let inputCEP = (cep.target as HTMLInputElement)?.value;
  //     const cepResponse = this.cepService.getCep(inputCEP);
  //     cepResponse.subscribe((cepModel) => {
  //       this.formPessoa.enderecoPessoa = new Endereco({
  //         cepEndereco: cepModel.cep,
  //         logradouroEndereco: cepModel.logradouro,
  //         numeroEndereco: '',
  //         bairroEndereco: cepModel.bairro,
  //         cidadeEndereco: cepModel.localidade,
  //         estadoEndereco: cepModel.uf,
  //       });
  //       this.showForm.next(true);
  //       console.log(this.formPessoa);
  //     });
  //   }
  // }

  // API do BUSCA CEP
  getViaCEP(cep: FocusEvent) {
    if ((cep.target as HTMLInputElement)?.value) {
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      const cepResponse = this.cepService.getCep(inputCEP);
      cepResponse.subscribe((cepModel) => {
        this.formPessoa.cepEndereco = cepModel.cep;
        this.formPessoa.logradouroEndereco = cepModel.logradouro;
        this.formPessoa.numeroEndereco = cepModel.numero;
        this.formPessoa.bairroEndereco = cepModel.bairro;
        this.formPessoa.cidadeEndereco = cepModel.localidade;
        this.formPessoa.estadoEndereco = cepModel.uf;
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
    this.cursoService.getById(1).subscribe(
      resp => this.formPessoa.cursoPessoa
    )

    this.hardSkillsSelecionadas.forEach(element => {
      this.todasSkillsSelecionadas.push(element)
    });

    this.softSkillsSelecionadas.forEach(element => {
      this.todasSkillsSelecionadas.push(element)
    });

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
