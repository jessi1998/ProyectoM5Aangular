import { Component, OnInit } from '@angular/core';
import { EstudianteRestService } from '../../Codegen/api/estudianteRest.service';
import { Estudiante } from '../../Codegen/model/estudiante';
import { CarreraRestService } from '../../Codegen/api/carreraRest.service';
import { Laboratorio } from '../../Codegen/model/laboratorio';
import { LaboratorioRestService } from '../../Codegen/api/laboratorioRest.service';
import { Bitacora } from 'src/app/Codegen';
import { FormGroup } from '@angular/forms';
import { Nivel } from '../../Codegen/model/nivel';
import { BitacoraRestService } from '../../Codegen/api/bitacoraRest.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cedula: '';
  estudiante: any;
  nombre: '';
  apellido: '';
  id: 0;
  nivel: any;
  niveles: '';
  asignatura: '';
  carrera: any;
  nombrecarrera: '';
  nombreequipo:'';
  descripcionbitacora:'';
  laboratorio: any;
  equipos: any;
  fecha = new Date().toLocaleString();
  constructor(private estudianteservice: EstudianteRestService, private carreraservice: CarreraRestService, private laboratorioservice: LaboratorioRestService,private bitacoraservice:BitacoraRestService ){}



  ngOnInit(): void {
   console.log(this.fecha);

  }

  Buscar() {
    this.estudianteservice.findByCedulaUsingGET(this.cedula).subscribe(data=>{
      this.estudiante = data;
      this.nombre = this.estudiante[0].nombre;
      //console.log(this.nombre);
      this.apellido = this.estudiante[0].apellido;
      this.id = this.estudiante[0].id_carrera;
      this.BuscarCarrera();
      this.BuscarLaboratorio();
    });

  }
  BuscarCarrera() {
    this.carreraservice.findByIdUsingGET(this.id).subscribe(data => {
      this.carrera = data;
      this.nombrecarrera = this.carrera[0].carrera_nombre;
      this.nivel = this.carrera[0].niveles;
      console.log(this.nivel);
      this.asignatura = this.carrera[0].niveles[0].asignaturas;
     // console.log(this.asignatura);
    });
  }
  BuscarLaboratorio() {
    this.laboratorioservice.listLaboratorysUsingGET().subscribe(data => {
      this.laboratorio = data;
      this.equipos = this.laboratorio[0].equipos;
      //console.log(this.laboratorio);
    });
  }
  SelectNivel(){
    console.log(this.asignatura)
  }
  GuardarBitacora(){
    console.log(this.descripcionbitacora)
    let  bitacora: Bitacora = {id:9,cedula:this.cedula,fechaBitacora:new Date(),idLaboratorio:4,nombreEquipo:'this.nombreequipo,',descripcionBitacora:this.descripcionbitacora};
    this.bitacoraservice.saveBinnacleUsingPOST(bitacora).subscribe(data=>{
      console.log(this.descripcionbitacora)
      console.log(data)
    })
   
  }
  }

