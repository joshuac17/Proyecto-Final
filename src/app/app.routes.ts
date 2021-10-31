import { RouterModule, Routes } from "@angular/router";
import { HomeComponent} from './Components/home/home.component';
import { CajaComponent} from './Components/login/login.component';
import { FacturacionComponent} from './Components/facturacion/facturacion.component';
import { PublicidadComponent} from './Components/publicidad/publicidad.component';
import { RegistroComponent} from './Components/registro/registro.component';



const APP_ROUTES: Routes=[

    {path: 'home', component: HomeComponent},
    {path: 'login', component: CajaComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'facturacion', component: FacturacionComponent},
    {path: 'publicidad', component: PublicidadComponent},
    {path: '**',pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);