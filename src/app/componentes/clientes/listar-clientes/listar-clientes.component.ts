import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  Clientes:any;
  constructor(private apiService:ApiService) {

   }

  ngOnInit(): void {
    this.apiService.ObtenerCLientes().subscribe(res=>{
      console.log(res);
      this.Clientes=res
    })
  }

}
