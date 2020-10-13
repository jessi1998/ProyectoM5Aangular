import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LaboratorioRestService } from '../../Codegen/api/laboratorioRest.service';

@Component({
  selector: 'app-listaequipos',
  templateUrl: './listaequipos.component.html',
  styleUrls: ['./listaequipos.component.css']
})
export class ListaequiposComponent implements OnInit {
  listalaboratorios: any;
  listaequipos: any;
  id;
  cabecera = ['Nombre equipo', 'Codigo Equipo'];
  constructor( private equiposservice: LaboratorioRestService) { }

  ngOnInit(): void {
    this.listalaboratorios = this.equiposservice.listLaboratorysUsingGET().subscribe( 
      data => {
        this.listalaboratorios = data;
        //this.id = this.listalaboratorios[0].id;
        //console.log(this.id);
        //this.listaequipos = this.listalaboratorios[this.id].equipos;
      }
    );
  }
  VerEquipos( id: number){
    
    this.listaequipos = this.listalaboratorios[id-1].equipos;
    console.log(this.listaequipos);
    console.log(id);
  }
}
