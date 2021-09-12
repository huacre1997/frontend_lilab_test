import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario} from './Usuario';
import { Cliente} from './Cliente';
import { Solicitud} from './Solicitud';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_usuarios:string="http://127.0.0.1:8000/usuarios"
  API_clientes:string="http://127.0.0.1:8000/clientes"
  API_solicitudes:string="http://127.0.0.1:8000/solicitudes"
  constructor(private usuarioHttp:HttpClient,private clienteHttp:HttpClient,private solicitudHttp:HttpClient) { 

  }

  ObtenerUsuarios(){
    return this.usuarioHttp.get(this.API_usuarios);
  }  
  ObtenerCLientes(){
    return this.clienteHttp.get(this.API_clientes);
  }  
  ObtenerSolicitudes(){
    return this.solicitudHttp.get(this.API_solicitudes);
  }
  CrearCliente(datosCLiente:Cliente):Observable<any>{
    return  this.clienteHttp.post(this.API_clientes+"/",datosCLiente)
  }  
  CrearSolicitud(datosSolicitud:Solicitud):Observable<any>{
    return  this.clienteHttp.post(this.API_solicitudes+"/",datosSolicitud)
  }  
  ObetnerSolicitud(id:any):Observable<any>{
    return  this.clienteHttp.get(this.API_solicitudes+"/"+id);
  }
}
