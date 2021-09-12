import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClientesComponent } from './componentes/clientes/crear-clientes/crear-clientes.component';
import { ListarClientesComponent } from './componentes/clientes/listar-clientes/listar-clientes.component';
import { HomeComponent } from './componentes/home/home.component';
import { ActualizarSolicitudesComponent } from './componentes/solicitudes/actualizar-solicitudes/actualizar-solicitudes.component';
import { CrearSolicitudesComponent } from './componentes/solicitudes/crear-solicitudes/crear-solicitudes.component';
import { ListarSolicitudesComponent } from './componentes/solicitudes/listar-solicitudes/listar-solicitudes.component';
import { ListarUsuariosComponent } from './componentes/usuarios/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {path:"",pathMatch:'full',component:HomeComponent},
  {path:"usuarios",component:ListarUsuariosComponent},
  {path:"clientes",component:ListarClientesComponent},
  {path:"solicitudes",component:ListarSolicitudesComponent},
  {path:"clientes/crear",component:CrearClientesComponent},
  {path:"solicitudes/crear",component:CrearSolicitudesComponent},
  {path:"solicitudes/editar/:id",component:ActualizarSolicitudesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
