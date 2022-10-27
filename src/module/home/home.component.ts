import { Component, OnInit } from '@angular/core';
import { student } from 'src/module/student';
import { ModifyService } from 'src/services/modify-service/modify.service';
import { Router } from '@angular/router';
import { OperationService } from 'src/services/operation-service/operation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name!:string;
subjects!:string;
grade!: string;
studentsArray!:student[]
student!: any;
isEmpty:Boolean=true;


  constructor(private ts:ModifyService,public route:Router,public Login:OperationService,) {
    this.studentsArray=[]
    const localitem = localStorage.getItem("studentsList")
    if(localitem===null){
      this.studentsArray=[]
    }else{
      this.studentsArray=JSON.parse(localitem)
      console.log(this.studentsArray)
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.name!==undefined && this.subjects!==undefined && this.grade!==undefined){
      this.isEmpty=true
    const list = {
      name:this.name,
      subjects:this.subjects,
      grade:this.grade,
      id:this.studentsArray.length>0?this.studentsArray[this.studentsArray.length-1].id+1:1
    }
    this.studentsArray.push(list)
    localStorage.setItem("studentsList", JSON.stringify(this.studentsArray))
    this.name = "";
    this.subjects = "";
    this.grade="";
  }
  else{
    this.isEmpty=false
  }
}
  dashboard(){
    this.route.navigate(["dashboard"])
  }
}
