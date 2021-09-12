import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormControlComponent } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarClientesComponent } from './componentes/clientes/listar-clientes/listar-clientes.component';
import { ListarUsuariosComponent } from './componentes/usuarios/listar-usuarios/listar-usuarios.component';
import { CrearUsuariosComponent } from './componentes/usuarios/crear-usuarios/crear-usuarios.component';
import { CrearClientesComponent } from './componentes/clientes/crear-clientes/crear-clientes.component';
import { ListarSolicitudesComponent } from './componentes/solicitudes/listar-solicitudes/listar-solicitudes.component';
import { HomeComponent } from './componentes/home/home.component';
import { ApiService } from './servicio/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CrearSolicitudesComponent } from './componentes/solicitudes/crear-solicitudes/crear-solicitudes.component';
import { ActualizarSolicitudesComponent } from './componentes/solicitudes/actualizar-solicitudes/actualizar-solicitudes.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    ListarUsuariosComponent,
    CrearUsuariosComponent,
    CrearClientesComponent,
    ListarSolicitudesComponent,
    HomeComponent,
    CrearSolicitudesComponent,
    ActualizarSolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdbFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
