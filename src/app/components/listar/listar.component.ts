import { Component, OnInit } from '@angular/core';
import { EstudianteRestService } from '../../Codegen/api/estudianteRest.service';
import { BitacoraRestService } from '../../Codegen/api/bitacoraRest.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  estudiantes: any;
  bitacoras: any;
  listacabecera = ['Cedula', 'Nombre', 'Apellido', 'Fecha', 'Equipo', 'Laboratorio'];
  constructor(private estudianteservice: EstudianteRestService, private bitacoraservice: BitacoraRestService) { }

  ngOnInit(): void {
    this.estudianteservice.listStudentsUsingGET().subscribe(data => { this.estudiantes = data });
    this.bitacoraservice.listBinnaclesUsingGET().subscribe(data => { this.bitacoras = data })
    console.log(this.listacabecera);
  }



}
