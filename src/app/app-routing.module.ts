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
import { CadastroHelperComponent } from './pages/register/cadastro-helper/cadastro-helper.component';
import { CadastroPatientComponent } from './pages/register/cadastro-patient/cadastro-patient.component';
import { ProfileHelperComponent } from './pages/profile/profile-helper/profile-helper.component';
import { ProfilePatientComponent } from './pages/profile/profile-patient/profile-patient.component';
import { AdditionalInfoComponent } from './pages/register/additional-info/additional-info.component';
// COMPONENTS
import { MapaComponent } from './components/mapa/mapa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mapa', component: MapaComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'sobreNos', component: sobreNosComponent },
  { path: 'nossoServico', component: nossoServicoComponent },
  { path: 'cadastro-helper', component: CadastroHelperComponent },
  { path: 'cadastro-patient', component: CadastroPatientComponent },
  { path: 'profile-helper', component: ProfileHelperComponent},
  { path: 'quemSomos', component: QuemSomosComponent},
  { path: 'nossaHistoria', component: NossaHistoriaComponent},
  { path: 'nossoObjetivo', component: NossoObjetivoComponent},
  { path: 'enfermagem', component: EnfermagemComponent},
  { path: 'fisioterapia', component: FisioterapiaComponent},
  { path: 'terapiaOcupacional', component: TerapiaOcupacionalComponent},
  { path: 'outrosProfissionais', component: OutrosProfissionaisComponent},
  { path: 'cadastro/additional-info', component: AdditionalInfoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
