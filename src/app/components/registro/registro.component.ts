import { Component, OnInit } from '@angular/core';
import { EstudianteRestService } from '../../Codegen/api/estudianteRest.service';
import { Estudiante } from '../../Codegen/model/estudiante';
import { CarreraRestService } from '../../Codegen/api/carreraRest.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cedula:'';
  estudiante:any;
  nombre:'';
  apellido:'';
  id:0;
  carrera:any;
  nombrecarrera:'';
  
  constructor(private estudianteservice:EstudianteRestService, private carreraservice: CarreraRestService) { }

  ngOnInit(): void {
  }

  Buscar(){
    console.log(this.cedula);
    this.estudianteservice.findByCedulaUsingGET(this.cedula).subscribe(data=>{
      this.estudiante=data;
      this.nombre=this.estudiante[0].nombre;
      this.apellido=this.estudiante[0].apellido;
      this.id=this.estudiante[0].id_carrera;
      console.log(this.id);
      console.log(this.estudiante);
    });
     
    
  }
  BuscarCarrera(){
    this.carreraservice.findByIdUsingGET(this.id).subscribe(data=>{
      this.carrera=data;
      this.nombrecarrera=this.carrera[0].carrera_nombre
      console.log(this.carrera)
    })
  }
  

}
