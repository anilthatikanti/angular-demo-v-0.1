import { Component, OnInit } from '@angular/core';
import { ModifyService } from 'src/services/modify-service/modify.service';
import { student } from 'src/module/student';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css'],
})
export class UpdateDetailsComponent implements OnInit {
  item?: any;
  name?: string;
  subjects?: string;
  grade?: string;
  studentsArray!: student[];
  isEmpty: Boolean = false;
  isTrue: boolean = true;
  error!: string;

  constructor(
    private modifyService: ModifyService,
    public route: Router,
    public ActivatedRoute: ActivatedRoute
  ) {
    // this.item = modifyService.updateneed;
    // this.name = this.item.name;
    // this.subjects = this.item.subjects;
    // this.grade = this.item.grade;
  }

  ngOnInit(): void {
    let idString = this.ActivatedRoute.snapshot.paramMap.get('id');
    if (!idString) {
      this.route.navigate(['dashboard']);
      return;
    }
    let id = Number.parseInt(idString);
    const local = localStorage.getItem('studentsList');
    if (local) {
      this.item = JSON.parse(local).find((i: any) => i.id === id);
      if (this.item === undefined) {
         this.route.navigate(['dashboard']);
        return;
      }
      this.name = this.item.name;
      this.subjects = this.item.subjects;
      this.grade = this.item.grade;
    }
  }
  onSubmit(form: any, studentName: any, subjectName: any, gradeName: any) {
    this.isTrue =
      studentName.errors === null &&
      subjectName.errors === null &&
      gradeName.errors === null;

    // console.log(this.isTrue);

    if (this.isTrue) {
      const list: any = {
        name: this.name,
        subjects: this.subjects,
        grade: this.grade,
        id: this.item.id,
      };
      const storage = localStorage.getItem('studentsList');
      if (storage) {
        this.studentsArray = JSON.parse(storage);
        const index = this.studentsArray.findIndex(
          (item) => item.id === list.id
        );
        this.studentsArray.splice(index, 1, list);
        localStorage.setItem(
          'studentsList',
          JSON.stringify(this.studentsArray)
        );
        this.isEmpty = false;
        this.route.navigate(['dashboard']);
      }
    } else {
      this.isEmpty = true;
      this.errorGenerate(studentName, subjectName, gradeName);
    }
  }

  visibleButton() {
    this.isTrue = true;
  }

  errorGenerate(studentName: any, subjectName: any, gradeName: any) {
    switch (true) {
      case studentName.errors && studentName.errors.required:
        this.error = 'please fill student name';
        break;
      case subjectName.errors && subjectName.errors.required:
        this.error = 'please fill subject name';
        break;
      case gradeName.errors && gradeName.errors.required:
        this.error = 'please choose the grade';
        break;
      default:
        this.visibleButton();
    }
  }

  goToHome() {
    this.route.navigate(['dashboard']);
  }
}
