import { Component, OnInit, ViewChild } from '@angular/core';
import { student } from 'src/module/student';
import { ModifyService } from 'src/services/modify-service/modify.service';
import { Router, TitleStrategy } from '@angular/router';
import { OperationService } from 'src/services/operation-service/operation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('studentName') f: any;

  name!: string;
  subjects!: string;
  grade!: string;
  studentsArray!: student[];
  student!: any;
  isEmpty: Boolean = false;
  isTrue: boolean = false;
  error!: string;

  constructor(
    private ts: ModifyService,
    public route: Router,
    public Login: OperationService
  ) {
    this.studentsArray = [];
    const localitem = localStorage.getItem('studentsList');
    if (localitem === null) {
      this.studentsArray = [];
    } else {
      this.studentsArray = JSON.parse(localitem);
    }
  }

  ngOnInit(): void {}

  onSubmit(form: any, studentName: any, subjectName: any, gradeName: any) {
    //    console.log("nametouched: "+ studentName.touched)
    //     console.log("subjecttouched: "+subjectName.touched)
    // console.log("gradetouched: " +gradeName.touched)
    // console.log("---------------------------------------------------------------------------------")
    // console.log(studentName.errors)
    //     console.log(subjectName.errors)
    // console.log(gradeName.errors)
    // console.log("-------------------------------------------------------------------------------------------")
    this.isTrue =
      studentName.touched &&
      studentName.errors === null &&
      subjectName.touched &&
      subjectName.errors === null &&
      gradeName.touched &&
      gradeName.errors === null;
    // console.log('isTrue: ' + this.isTrue);

    if (this.isTrue) {
      const list = {
        name: this.name,
        subjects: this.subjects,
        grade: this.grade,
        id:
          this.studentsArray.length > 0
            ? this.studentsArray[this.studentsArray.length - 1].id + 1
            : 1,
      };
      this.studentsArray.push(list);
      localStorage.setItem('studentsList', JSON.stringify(this.studentsArray));
      this.name = '';
      this.subjects = '';
      this.grade = '';
      this.isEmpty = false;
      this.route.navigate(['dashboard']);
    } else {
      this.isEmpty = true;
      this.errorGenerate(studentName, subjectName, gradeName);
    }
  }
  cancel() {
    this.name = '';
    this.subjects = '';
    this.grade = '';
    this.isTrue = false;
    this.isEmpty=false;
  }

  errorGenerate(studentName: any, subjectName: any, gradeName: any) {
    //--------------->button visible
    switch (true) {
      case studentName.errors && studentName.errors.required:
        this.error = 'please fill student name';
        this.isTrue = false;
        break;
      case subjectName.errors && subjectName.errors.required:
        this.error = 'please fill subject name';
        this.isTrue = false;
        break;
      case gradeName.errors && gradeName.errors.required:
        this.error = 'please choose the grade';
        this.isTrue = false;
        break;
      default:
        // this.visibleButton();
        this.isTrue = true;
    }
  }
}
