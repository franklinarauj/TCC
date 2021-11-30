import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// PAGES
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TermsComponent } from './pages/empresa/terms/terms.component';
import { CadastroComponent } from './pages/register/cadastro/cadastro.component';
import { QuemSomosComponent } from './pages/ajuda/quem-somos/quem-somos.component';
import { NossaHistoriaComponent } from './pages/ajuda/nossa-historia/nossa-historia.component';
import { NossoObjetivoComponent } from './pages/ajuda/nosso-objetivo/nosso-objetivo.component';
import { EnfermagemComponent } from './pages/profissionais/enfermagem/enfermagem.component';
import { FisioterapiaComponent } from './pages/profissionais/fisioterapia/fisioterapia.component';
import { TerapiaOcupacionalComponent } from './pages/profissionais/terapia-ocupacional/terapia-ocupacional.component';
import { OutrosProfissionaisComponent } from './pages/profissionais/outros-profissionais/outros-profissionais.component';
import { AdditionalInfoComponent } from './pages/register/additional-info/additional-info.component';
import { CurriculumInfoComponent } from './pages/profile/curriculum-info/curriculum-info.component';
import { ProfileHelperComponent } from './pages/profile/profile-helper/profile-helper.component';
import { ProfilePatientComponent } from './pages/profile/profile-patient/profile-patient.component';
import { MatchComponent } from './pages/match/match.component';
import { ProntuarioInfoComponent } from './pages/profile/prontuario-info/prontuario-info.component';
import { ProntuarioComponent } from './pages/prontuario/prontuario.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ModalComponent } from './components/modal/modal.component';

// IMPORTS @ANGULAR
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

// DIRECTIVES
import { CenterDirective } from './directives/center.directive';
import { CadastroService } from './services/cadastro.service';
import { PacienteService } from './services/paciente.service';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    TermsComponent,
    CadastroComponent,
    AdditionalInfoComponent,
    MapaComponent,
    ProfileHelperComponent,
    ProfilePatientComponent,
    CenterDirective,
    QuemSomosComponent,
    NossaHistoriaComponent,
    NossoObjetivoComponent,
    EnfermagemComponent,
    FisioterapiaComponent,
    TerapiaOcupacionalComponent,
    OutrosProfissionaisComponent,
    CurriculumInfoComponent,
    MatchComponent,
    ModalComponent,
    ProntuarioInfoComponent,
    ProntuarioComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    MatRadioModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [PacienteService],
  entryComponents: [MatDialogModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
