import { Component, OnInit } from '@angular/core';
import { EstudianteRestService } from '../../Codegen/api/estudianteRest.service';

@Component({
  selector: 'app-estudiante-card',
  templateUrl: './estudiante-card.component.html',
  styleUrls: ['./estudiante-card.component.css']
})
export class EstudianteCardComponent implements OnInit {
  listaestudiantes: any;

  constructor(private estudianteservice: EstudianteRestService) { }

  ngOnInit(): void {
    this.estudianteservice.listStudentsUsingGET().subscribe( data => {
    this.listaestudiantes = data
    });
  }

}
