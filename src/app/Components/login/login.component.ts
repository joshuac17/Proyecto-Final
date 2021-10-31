import { Component, OnInit } from '@angular/core';
import { EmpleadoService, empleados } from '../../servicios/login/empleado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class CajaComponent implements OnInit {

  empleados:empleados[]=[];
  constructor( private _empleadoService:EmpleadoService ) {
    console.log("constructor");


   }

  ngOnInit(): void {
    this.empleados = this._empleadoService.getempleado();

    console.log(this.empleados);
  }

}


