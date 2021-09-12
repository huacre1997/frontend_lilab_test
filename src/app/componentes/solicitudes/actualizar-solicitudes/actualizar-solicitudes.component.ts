import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-actualizar-solicitudes',
  templateUrl: './actualizar-solicitudes.component.html',
  styleUrls: ['./actualizar-solicitudes.component.scss']
})
export class ActualizarSolicitudesComponent implements OnInit {
  ID:any;
  formularioSolicitud:FormGroup;
  Clientes=[] as any;
  constructor(public formulario:FormBuilder, private activeRoute:ActivatedRoute,private apiService:ApiService,private ruteador:Router) {
    this.ID=this.activeRoute.snapshot.paramMap.get("id")
    this.apiService.ObetnerSolicitud(this.ID).subscribe(res=>{
      console.log(res);
      this.formularioSolicitud.setValue({
        cliente:res.cliente.id,
        aprobado:res.aprobado,
        monto:res.monto

      })
     })   
    this.formularioSolicitud=this.formulario.group({
      cliente:[""],
      aprobado:false,
      monto:[""]
    })
    }

  ngOnInit(): void {
    this.apiService.ObtenerCLientes().subscribe(res=>{
     
      this.Clientes=res
    })
  }

}
