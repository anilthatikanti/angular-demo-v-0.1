import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModifyService } from '../../services/modify-service/modify.service';
import { OperationService } from '../../services/operation-service/operation.service';
import { student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentsArray!:student[]
  constructor(private ts:ModifyService,private Login:OperationService,private route:Router) { }

  ngOnInit(): void {
    let localItem = localStorage.getItem("studentsList")
    if(localItem){
      this.studentsArray=JSON.parse(localItem)
      console.log(this.studentsArray)
    }
  }

  itemNeedUpdate(item:student){
    this.ts.updatedobject(item)
  }


  logOut(){
    this.Login.checkIsUser()
    this.route.navigate(["login"])
  }

  deleteItem(item:student){
    const index = this.studentsArray.indexOf(item)
    console.log(index)
    // this.studentsArray=this.studentsArray.filter(student=>student.id!=item.id);
    this.studentsArray.splice(index,1)
    localStorage.setItem("studentsList", JSON.stringify(this.studentsArray))
}

gotoHome(){
  this.route.navigate(["home"])
}

}
