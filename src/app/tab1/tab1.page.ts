import { StudentService } from './../services/student.service';
import { Student } from './../models/student';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // arreglo de estudiantes
  students: Student[] = new Array();

  // obtener metodos del servicio por este atribto
  constructor(private studentServices: StudentService) {
  // lo que esta en el constructor se ejecuta antes de cargar la pagina

    // obtener el arreglo de estudiantes
    this.students = this.studentServices.getStudents();
  }

}
