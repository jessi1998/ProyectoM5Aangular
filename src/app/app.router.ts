import {RouterModule, Routes} from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { RegistroComponent } from './components/registro/registro.component';


const ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
     {path: 'regisgtro', component: RegistroComponent }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
