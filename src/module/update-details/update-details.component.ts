import { Component, OnInit } from '@angular/core';
import { ModifyService } from 'src/services/modify-service/modify.service';
import { student } from 'src/module/student';
import { Router } from '@angular/router';
import { OperationService } from '../../services/operation-service/operation.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
item?:any
name?:string
subjects?:string
grade?:string
studentsArray!:student[]

  constructor(private modifyService:ModifyService,public route :Router) {
    this.item = modifyService.updateneed
    this.name = this.item.name
    this.subjects=this.item.subjects
    this.grade=this.item.grade
   }

  ngOnInit(): void {
    
  }
  onSubmit(){
    const list:any= {
      name:this.name,
      subjects:this.subjects,
      grade:this.grade,
      id:this.item.id
    }
    const storage = localStorage.getItem("studentsList")
    if(storage)
    {
      this.studentsArray = JSON.parse(storage)
      const index = this.studentsArray.findIndex(item=>item.id===list.id)
      this.studentsArray.splice(index,1,list)
      console.log(this.studentsArray)
      localStorage.setItem("studentsList",JSON.stringify(this.studentsArray))
      this.route.navigate(["home"])
    }
  }

  goToHome(){
    this.route.navigate(["home"])
  }
}
