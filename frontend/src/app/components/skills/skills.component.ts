import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
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
    'Lógica de Programação',
    'Banco de Dados',
    'Orientação a Objetos',
  ];

  hardSkillsSelecionadas: string[] = [];

  constructor() {}

  ngOnInit(): void {}

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
}
