import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// PAGES
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TermsComponent } from './pages/register/terms/terms.component';
import { sobreNosComponent } from './pages/sobreNos/sobreNos.component';
import { nossoServicoComponent } from './pages/nossoServico/nossoServico.component';
import { CadastroComponent } from './pages/register/cadastro/cadastro.component';
import { ProfileHelperComponent } from './pages/profile/profile-helper/profile-helper.component';
import { ProfilePatientComponent } from './pages/profile/profile-patient/profile-patient.component';
// COMPONENTS
import { MapaComponent } from './components/mapa/mapa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'sobreNos', component: sobreNosComponent },
  { path: 'nossoServico', component: nossoServicoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'mapa', component: MapaComponent},
  { path: 'profile-helper', component: ProfileHelperComponent},
  { path: 'profile-patient', component: ProfilePatientComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
