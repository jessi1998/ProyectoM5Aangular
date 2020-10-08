import { Component, OnInit } from '@angular/core';
import { EstudianteRestService } from '../../Codegen/api/estudianteRest.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  estudiantes:any;
  constructor(private estudianteservice:EstudianteRestService) { }

  ngOnInit(): void {
    this.estudianteservice.listStudentsUsingGET().subscribe(data=>{this.estudiantes=data})
  }

  

}
