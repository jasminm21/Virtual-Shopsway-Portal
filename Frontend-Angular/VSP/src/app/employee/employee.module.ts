import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';
import {EmployeeListComponent } from './employee-list/employee-list.component'
import {AddEmployeeComponent } from './add-employee/add-employee.component'

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'employees', component: EmployeeComponent},
      // {path:'view-employees', component: EmployeeComponent},
      // {path:'add-employee', component: EmployeeComponent},
    ]),
  ],
})
export class EmployeeModule { }
