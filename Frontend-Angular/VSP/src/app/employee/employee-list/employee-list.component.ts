import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';

@Component({
  selector: 'pm-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  showImage: boolean = true;
  // employees:[];

  employees:Employee[]=[
    {
      employeeName:"jasmin",
     address:"pune",
      designation:"SE"
    },
    {
      employeeName:"jasmin",
     address:"pune",
      designation:"SE"
    },
    {
      employeeName:"jasmin",
      address:"pune",
       designation:"SE"
    }
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.employees[1]);
  }
  
  toggleImage(): void {
      this.showImage = !this.showImage;
  }

}
