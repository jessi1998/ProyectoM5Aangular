import {RouterModule, Routes} from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListarComponent } from './components/listar/listar.component';
import { ListaequiposComponent } from './components/listaequipos/listaequipos.component';
import { LaboratorioCardComponent } from './components/laboratorio-card/laboratorio-card.component';
import { EstudianteCardComponent } from './components/estudiante-card/estudiante-card.component';


const ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
     {path: 'registro', component: RegistroComponent },
     {path: 'listar' , component: ListarComponent},
     {path: 'listarequipos' , component: ListaequiposComponent},
     {path: 'listarlaboratorios' , component: LaboratorioCardComponent},
     {path: 'listarestudiante' , component: EstudianteCardComponent},
     { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
