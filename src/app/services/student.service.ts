import { Injectable } from '@angular/core';
import { Student} from "../models/student";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Daniel Enrique High Mendoza',
      controlNumber: '15401006',
      active: true,
    });
    this.students.push({
      name: 'Andres Mitchel Haro Silva',
      controlNumber: '15401006',
      active: true,
    });
    this.students.push({
      name: 'Oswald Elias Ibarra Ramos',
      controlNumber: '154010##',
      active: false,
    });
  }

// recuperar un estudiante
  getStudents(): Student[]{
    return this.students;
  }
// cambiar atributo de un elemento
  changeStatus(position): void{
    this.students[position].active = !this.students[position].active;
  }
}
