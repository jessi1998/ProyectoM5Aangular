import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APPROUTING } from './app.router';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {  GoogleLoginProvider} from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarComponent } from './components/listar/listar.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BitacoraRestService } from './Codegen/api/bitacoraRest.service';
import { CarreraRestService } from './Codegen/api/carreraRest.service';
import { EstudianteRestService } from './Codegen/api/estudianteRest.service';
import { LaboratorioRestService } from './Codegen/api/laboratorioRest.service';
import { EstudianteCardComponent } from './components/estudiante-card/estudiante-card.component';
import { LaboratorioCardComponent } from './components/laboratorio-card/laboratorio-card.component';
import { ListaequiposComponent } from './components/listaequipos/listaequipos.component';
import { ListamateriasComponent } from './components/listamaterias/listamaterias.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RegistroComponent,
    FooterComponent,
    ListarComponent,
    EstudianteCardComponent,
    LaboratorioCardComponent,
    ListaequiposComponent,
    ListamateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    APPROUTING  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('713671711445-l69np0og751s5jvo612u8rkqhb3rep15.apps.googleusercontent.com'
            ),
          }
        ],
      } as SocialAuthServiceConfig,
    },
    BitacoraRestService,
    CarreraRestService,
    EstudianteRestService,
    LaboratorioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
