import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsComponent } from './components/forms/forms.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRecruiterComponent } from './components/home-recruiter/home-recruiter.component';
import { EtapasComponent } from './components/etapas/etapas.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormsRecrutadorComponent } from './components/forms-recrutador/forms-recrutador.component';
import { MatchComponent } from './components/match/match.component';
import { DatePipe } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    FormsComponent,
    NavbarComponent,
    HomeRecruiterComponent,
    EtapasComponent,
    SkillsComponent,
    FormsRecrutadorComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
