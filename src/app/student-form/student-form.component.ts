import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: Student = { id: 0, name: '', age: 0, grade: '' };
  isEditing = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      const student = this.studentService.getStudentById(Number(id));
      if (student) {
        this.student = student;
      }
    }
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.studentService.updateStudent(this.student);
    } else {
      this.student.id = Math.floor(Math.random() * 1000);
      this.studentService.addStudent(this.student);
    }
    this.router.navigate(['/']);
  }
}
