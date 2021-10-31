import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleado:empleados[] = [
    
{
	id_empleado: 678912345,
	correoElectronico: " cgd@sdfs.com ",
	clave: 1234,
	id_cargo: 1,
	nombre: " Camilo ",
	apellido: " Gomez ",
	turno: " Diurno "
},
{
	id_empleado: 789123456,
	correoElectronico: " atn@asdf.com ",
	clave: 1234,
	id_cargo: 2,
	nombre: " Angie ",
	apellido: " Torres ",
	turno: " Nocturno "
},
{
	id_empleado: 891234567,
	correoElectronico: " dgn@asdf.com ",
	clave: 1234,
	id_cargo: 1,
	nombre: " Daniel ",
	apellido: " Garcia ",
	turno: " Nocturno "
},
{
	id_empleado: 912345678,
	correoElectronico: " cmd@asdf.com ",
	clave: 1234,
	id_cargo: 2,
	nombre: " Cristian ",
	apellido: " Martinez ",
	turno: " Diurno "
},
{
	id_empleado: 133456789,
	correoElectronico: " cpd@asdf.com ",
	clave: 1234,
	id_cargo: 3,
	nombre: " Carolina ",
	apellido: " Pinto ",
	turno: " Diurno "
}

  ];

  constructor() {console.log("servicio listo para usar"); }

  getempleado():empleados[]{
    return this.empleado;
  }



}


export interface empleados{
  id_empleado: number; 
  correoElectronico:string;
  clave: number;
  id_cargo:number;
  nombre: string;
  apellido:string;
  turno:  string;
}