import { Component, OnInit } from '@angular/core';
import { EstudianteRestService } from '../../Codegen/api/estudianteRest.service';
import { Estudiante } from '../../Codegen/model/estudiante';
import { CarreraRestService } from '../../Codegen/api/carreraRest.service';
import { Laboratorio } from '../../Codegen/model/laboratorio';
import { LaboratorioRestService } from '../../Codegen/api/laboratorioRest.service';
import { Bitacora } from 'src/app/Codegen';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;
  bitacora: Bitacora = {};
  cedula: '';
  estudiante: any;
  nombre: '';
  apellido: '';
  id: 2;
  nivel: any;
  niveles: '';
  asignatura: '';
  carrera: any;
  nombrecarrera: '';
  laboratorio: any;
  equipo: any;
  fecha = new Date().toLocaleString();
  constructor(private estudianteservice: EstudianteRestService, private carreraservice: CarreraRestService, private laboratorioservice: LaboratorioRestService ){}



  ngOnInit(): void {
   console.log(this.fecha);

  }

  Buscar() {
    console.log(this.cedula);
    this.estudianteservice.findByCedulaUsingGET(this.cedula).subscribe(data=>{
      this.estudiante = data;
      this.nombre = this.estudiante[0].nombre;
      this.apellido = this.estudiante[0].apellido;
      this.id = this.estudiante[0].id_carrera;
      this.BuscarCarrera();
      this.BuscarLaboratorio();
    });

  }
  BuscarCarrera() {
    this.carreraservice.findByIdUsingGET(1).subscribe(data => {
      this.carrera = data;
      this.nombrecarrera = this.carrera[0].carrera_nombre;
      this.nivel = this.carrera[0].niveles;
      this.asignatura = this.carrera[0].niveles[0].asignaturas;
    });
  }
  BuscarLaboratorio() {
    this.laboratorioservice.listLaboratorysUsingGET().subscribe(data => {
      this.laboratorio = data;
      this.equipo = this.laboratorio[0].equipos;
      console.log(this.laboratorio);
    });
  }
  SelectNivel(){
  }

  GuardarBitacora(){
    
  }

  
  }

