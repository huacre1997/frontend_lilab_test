import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.scss']
})
export class CrearClientesComponent implements OnInit {
  formularioCliente:FormGroup;
  constructor(public formulario:FormBuilder,private apiService:ApiService,private ruteador:Router) {
    this.formularioCliente=this.formulario.group({
      nombres:[""],
      apellidos:[""],
      puntuacion:[""]
    })
   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    this.apiService.CrearCliente(this.formularioCliente.value).subscribe();
    this.ruteador.navigateByUrl("/clientes")
  }
}
