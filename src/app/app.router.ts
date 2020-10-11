import {RouterModule, Routes} from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListarComponent } from './components/listar/listar.component';


const ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
     {path: 'registro', component: RegistroComponent },
     {path: 'listar' , component: ListarComponent},
     { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
