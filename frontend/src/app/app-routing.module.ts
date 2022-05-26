import { HomeRecruiterComponent } from './components/home-recruiter/home-recruiter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { LoginComponent } from './components/login/login.component';
import { fromEventPattern } from 'rxjs';
import { FormsRecrutadorComponent } from './components/forms-recrutador/forms-recrutador.component';
import { MatchComponent } from './components/match/match.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'candidato', component: FormsComponent},
  {path: 'home', component: HomeRecruiterComponent},
  {path: 'curso', component: FormsRecrutadorComponent},
  {path: 'matches', component: MatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
