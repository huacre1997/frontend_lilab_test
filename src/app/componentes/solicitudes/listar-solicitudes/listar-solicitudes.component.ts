import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.scss']
})
export class ListarSolicitudesComponent implements OnInit {

 
  Solicitudes:any;
  constructor(private apiService:ApiService) {

   }

  ngOnInit(): void {
    this.apiService.ObtenerSolicitudes().subscribe(res=>{
      console.log(res);
      this.Solicitudes=res
    })
  }
}
