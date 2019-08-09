import { Component, OnInit } from '@angular/core';
import { DepartmentcrudService } from '../departmentcrud.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-departmentslist',
  templateUrl: './departmentslist.component.html',
  styleUrls: ['./departmentslist.component.css']
})
export class DepartmentslistComponent implements OnInit {

  departments : any;

  constructor(private crud : DepartmentcrudService) { }

getAllDepartments = async () => {

  await this.crud.getAllDepartments().subscribe(
    data =>{
      this.departments = data
      console.log(data);
    }
  );

}
 
  ngOnInit() {

   this.getAllDepartments();
  }



}
