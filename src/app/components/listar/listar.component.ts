import { Component, OnInit } from '@angular/core';
import { BitacoraRestService } from 'src/app/Codegen';
import { EstudianteRestService } from '../../Codegen/api/estudianteRest.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  estudiantes: any;
  bitacoras: any;
  listacabecera = ['Cedula', 'Fecha', 'Equipo', 'Laboratorio', 'Descripcion'];
  cedula: '';
  nombre: any;
  apellido: any;
  constructor(private estudianteservice: EstudianteRestService, private bitacoraservice: BitacoraRestService) { }

  ngOnInit(): void {
    //this.estudianteservice.listStudentsUsingGET().subscribe(data => { this.estudiantes = data });
    this.bitacoraservice.listBinnaclesUsingGET().subscribe(data => { 
      this.bitacoras = data;
      this.cedula = this.bitacoras.cedula;
    });
    this.estudianteservice.findByCedulaUsingGET(this.cedula).subscribe( data =>   {
      this.estudiantes = data;
      this.nombre = this.estudiantes[0].nombre;
      this.apellido = this.estudiantes[0].apellido;
      console.log(this.nombre);
    });
  }

  ValidarCedula() {
    this.estudianteservice.findByCedulaUsingGET(this.cedula).subscribe( data =>   {
      this.estudiantes = data
      this.nombre = this.estudiantes[0].nombre;
      this.apellido = this.estudiantes[0].apellido;
      

    });
  }



}
