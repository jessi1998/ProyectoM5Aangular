import { Component, OnInit } from '@angular/core';
import { Laboratorio } from '../../Codegen/model/laboratorio';
import { LaboratorioRestService } from '../../Codegen/api/laboratorioRest.service';

@Component({
  selector: 'app-laboratorio-card',
  templateUrl: './laboratorio-card.component.html',
  styleUrls: ['./laboratorio-card.component.css']
})
export class LaboratorioCardComponent implements OnInit {
  listalaboratorios: any;
  listaequipos: any;
  nombre: any;

  id:any;
  cabecera = ['Nombre equipo', 'Codigo Equipo'];
  constructor(private laboratorioservice: LaboratorioRestService) { }

  ngOnInit(): void {
    this.laboratorioservice.listLaboratorysUsingGET().subscribe(data => {
      this.listalaboratorios = data;
      this.listaequipos = this.listalaboratorios[ 1].equipos;
    });

  }

  VerEquipos(id: number) {
    console.log('******');
    
    for (let i = 0; i < 10; i++) {
      this.nombre = this.listaequipos[i].nombre_equipo;
   }
    console.log(this.listaequipos);
    console.log(id);
  }




}
