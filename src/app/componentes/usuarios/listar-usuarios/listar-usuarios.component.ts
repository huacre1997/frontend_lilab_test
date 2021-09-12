import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  Usuarios:any;
  constructor(private apiService:ApiService) {

   }

  ngOnInit(): void {
    this.apiService.ObtenerUsuarios().subscribe(res=>{
      console.log(res);
      this.Usuarios=res
    })
  }

}
