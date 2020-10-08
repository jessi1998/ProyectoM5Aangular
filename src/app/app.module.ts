import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APPROUTING } from './app.router';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RegistroComponent,
    FooterComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APPROUTING  ],
  providers: [
    BitacoraRestService,
    CarreraRestService,
    EstudianteRestService,
    LaboratorioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
