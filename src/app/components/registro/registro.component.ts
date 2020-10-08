import { Component, OnInit } from '@angular/core';
import { EstudianteRestService } from '../../Codegen/api/estudianteRest.service';
import { Estudiante } from '../../Codegen/model/estudiante';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cedula:'';
  estudiante:any;
  nombre:'';
  
  constructor(private estudianteservice:EstudianteRestService) { }

  ngOnInit(): void {
  }

  Buscar(){
    console.log(this.cedula);
    this.estudianteservice.findByCedulaUsingGET(this.cedula).subscribe(data=>{
      this.estudiante=data;
      this.nombre=this.estudiante[0].nombre;
      console.log(this.estudiante[0].nombre)
    });
  }

}
