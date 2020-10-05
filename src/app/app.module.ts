import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {    APPROUTING} from './app.router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarComponent } from './components/listar/listar.component';

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
    APPROUTING  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
