import { Component, Optional, Inject, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-employees',
  templateUrl: './new-employees.component.html',
  styleUrls: ['./new-employees.component.scss']
})
export class NewEmployeesComponent implements OnInit {
  public id: number;
  public name:string;

  constructor(
    employeeService: EmployeeService,
    public dialogRef: MatDialogRef<NewEmployeesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    
  ) {
    this.id = data.id;
    this.name = data.name;
   }

  ngOnInit(): void {
  }
  getEmployeeById(id:number){
    this.getEmployeeById(id);
  }
}
