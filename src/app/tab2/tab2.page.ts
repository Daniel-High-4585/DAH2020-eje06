import { Component } from '@angular/core';
import { StudentService } from './../services/student.service';
import { Student } from './../models/student';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    // arreglo de estudiantes
    students: Student[] = new Array();

    // obtener metodos del servicio por este atribto
    constructor(private studentServices: StudentService) {
    // lo que esta en el constructor se ejecuta antes de cargar la pagina
      // obtener el arreglo de estudiantes
      this.students = this.studentServices.getStudents();
    }
}
