import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//rutas
import {APP_ROUTING} from './app.routes';

//servicios
import { EmpleadoService } from './servicios/login/empleado.service';

//componentes
import { AppComponent } from './app.component';
import { CajaComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { PublicidadComponent } from './Components/publicidad/publicidad.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { FacturacionComponent } from './Components/facturacion/facturacion.component';


@NgModule({
  declarations: [
    AppComponent,
    CajaComponent,
    RegistroComponent,
    PublicidadComponent,
    NavbarComponent,
    HomeComponent,
    FacturacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
