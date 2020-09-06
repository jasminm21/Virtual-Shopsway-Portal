import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  temp:boolean=true;

  viewHeading(){
    this.temp=true;
  }

  addHeading(){
    this.temp=false;
  }
}
