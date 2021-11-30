import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// PAGES
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TermsComponent } from './pages/empresa/terms/terms.component';
import { sobreNosComponent } from './pages/empresa/sobreNos/sobreNos.component';
import { nossoServicoComponent } from './pages/empresa/nossoServico/nossoServico.component';
import { QuemSomosComponent } from './pages/ajuda/quem-somos/quem-somos.component';
import { NossaHistoriaComponent } from './pages/ajuda/nossa-historia/nossa-historia.component';
import { NossoObjetivoComponent } from './pages/ajuda/nosso-objetivo/nosso-objetivo.component';
import { EnfermagemComponent } from './pages/profissionais/enfermagem/enfermagem.component';
import { FisioterapiaComponent } from './pages/profissionais/fisioterapia/fisioterapia.component';
import { TerapiaOcupacionalComponent } from './pages/profissionais/terapia-ocupacional/terapia-ocupacional.component';
import { OutrosProfissionaisComponent } from './pages/profissionais/outros-profissionais/outros-profissionais.component';
import { CadastroComponent } from './pages/register/cadastro/cadastro.component';
import { ProfileHelperComponent } from './pages/profile/profile-helper/profile-helper.component';
import { ProfilePatientComponent } from './pages/profile/profile-patient/profile-patient.component';
import { AdditionalInfoComponent } from './pages/register/additional-info/additional-info.component';
import { CurriculumInfoComponent } from './pages/profile/curriculum-info/curriculum-info.component';
import { ProntuarioInfoComponent } from './pages/profile/prontuario-info/prontuario-info.component';
import { MatchComponent } from './pages/match/match.component';
import { ProntuarioComponent } from './pages/prontuario/prontuario.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';

// COMPONENTS
import { MapaComponent } from './components/mapa/mapa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'sobreNos', component: sobreNosComponent },
  { path: 'nossoServico', component: nossoServicoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'profile-helper/:cpf', component: ProfileHelperComponent },
  { path: 'profile-patient/:cpf', component: ProfilePatientComponent },
  { path: 'quemSomos', component: QuemSomosComponent },
  { path: 'nossaHistoria', component: NossaHistoriaComponent },
  { path: 'nossoObjetivo', component: NossoObjetivoComponent },
  { path: 'enfermagem', component: EnfermagemComponent },
  { path: 'fisioterapia', component: FisioterapiaComponent },
  { path: 'terapiaOcupacional', component: TerapiaOcupacionalComponent },
  { path: 'outrosProfissionais', component: OutrosProfissionaisComponent },
  { path: 'perfil/additional-info', component: CurriculumInfoComponent },
  { path: 'perfil/prontuario-info', component: ProntuarioInfoComponent },
  { path: 'match', component: MatchComponent },
  { path: 'prontuario', component: ProntuarioComponent },
  { path: 'curriculum', component: CurriculumComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
