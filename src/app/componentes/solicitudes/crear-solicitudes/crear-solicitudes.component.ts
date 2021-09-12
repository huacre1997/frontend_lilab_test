import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/servicio/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-solicitudes',
  templateUrl: './crear-solicitudes.component.html',
  styleUrls: ['./crear-solicitudes.component.scss']
})
export class CrearSolicitudesComponent implements OnInit {
  Clientes=[] as any;
  formularioSolicitudes:FormGroup;
  constructor(public formulario:FormBuilder,private apiService:ApiService,private ruteador:Router) {
    this.formularioSolicitudes=this.formulario.group({
      cliente:[""],
      monto:[""],
  
    })
   }

 ngOnInit(): void {
   this.apiService.ObtenerCLientes().subscribe(res=>{
     
     this.Clientes=res
   })
 }
 enviarDatos(){
  this.apiService.CrearSolicitud(this.formularioSolicitudes.value).subscribe();

  this.ruteador.navigateByUrl("/solicitudes")

 }
}
