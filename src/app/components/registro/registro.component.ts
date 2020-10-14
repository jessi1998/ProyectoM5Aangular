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

  cedula: string = '';
  estudiante: any;
  nombre: '';
  apellido: '';
  id: 0;
  nivel: any;
  niveles: '';
  asignatura: '';
  carrera: any;
  nombrecarrera: '';
  nombreequipo: '';
  descripcionbitacora: '';
  laboratorio: any;
  equipos: any;
  asignaturaSelect: string = '';
  selectasignatura: string = '';
  nivelSeleccion: string = '';
  selectnivel: string = '';
  laboratorioSelect: number;
  selectlaboratorio: number;
  equipoSelect: string = '';
  selectequipo: string = '';
  fecha = new Date().toLocaleString();
  bitacora: Bitacora = {
    carreraNombre: '', cedula: '', descripcionBitacora: '', fechaBitacora: new Date(), id: 0,
    idLaboratorio: 0, nivelNombre: '', nombreAsignatura: '', nombreEquipo: ''
  };

  constructor(private estudianteservice: EstudianteRestService, private carreraservice: CarreraRestService,
    private laboratorioservice: LaboratorioRestService, private bitacoraservice: BitacoraRestService) { }



  ngOnInit(): void {
    console.log(this.fecha);
  }


  Buscar() {
    this.estudianteservice.findByCedulaUsingGET(this.cedula).subscribe(data => {
      this.estudiante = data;
      this.nombre = this.estudiante[0].nombre;
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

    });

  }
  BuscarLaboratorio() {
    this.laboratorioservice.listLaboratorysUsingGET().subscribe(data => {
      this.laboratorio = data;
      //  this.equipos = this.laboratorio[0].equipos;
    });
  }
  SelectAsignatura() {
    this.selectasignatura = this.asignaturaSelect;
    console.log(this.selectasignatura);
  }
  SelectNivel() {
    this.selectnivel = this.nivelSeleccion;
    console.log(this.selectnivel);
    this.carreraservice.findByIdUsingGET(this.id).subscribe(data => {
      this.asignatura = this.carrera[0].niveles[parseInt(this.selectnivel) - 1].asignaturas;
    });
  }
  SeleccionarLaboratorio() {
    this.selectlaboratorio = this.laboratorioSelect;
    console.log(this.selectlaboratorio);
    this.laboratorioservice.listLaboratorysUsingGET().subscribe(data => {
      this.laboratorio = data;
      this.equipos = this.laboratorio[this.selectlaboratorio - 1].equipos;
      console.log(this.equipos);
      });
  }
  SeleccionarEquipo() {
    this.selectequipo = this.equipoSelect;
    console.log(this.selectequipo);
  }

  GuardarBitacora() {
    console.log(this.descripcionbitacora);

    this.bitacora.cedula = this.cedula;
    this.bitacora.descripcionBitacora = this.descripcionbitacora;
    this.bitacora.fechaBitacora = new Date();
    this.bitacora.idLaboratorio = this.selectlaboratorio;
    this.bitacora.nombreEquipo = this.selectequipo;
    this.bitacora.nivelNombre = this.selectnivel;
    this.bitacora.nombreAsignatura = this.selectasignatura;
    this.bitacora.carreraNombre = this.nombrecarrera;

    console.log(this.bitacora.descripcionBitacora);
    console.log(this.nombrecarrera);
    console.log(this.bitacora.carreraNombre);
    console.log(this.bitacora.idLaboratorio);
    this.bitacoraservice.saveBinnacleUsingPOST(this.bitacora).subscribe(data => {
      console.log(this.bitacora.descripcionBitacora);
      console.log(this.bitacora);
    });

  }

}

