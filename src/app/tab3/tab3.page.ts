import { Component } from '@angular/core';
import { StudentService } from './../services/student.service';
import { Student } from './../models/student';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

     // arreglo de estudiantes
     students: Student[] = new Array();

     // obtener metodos del servicio por este atribto
     constructor(private studentServices: StudentService) {
     // lo que esta en el constructor se ejecuta antes de cargar la pagina
       // obtener el arreglo de estudiantes
       this.students = this.studentServices.getStudents();
     }
}
