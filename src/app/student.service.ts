import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 22, grade: 'B' }
  ];

  constructor() { }

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  updateStudent(updatedStudent: Student): void {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }
}
