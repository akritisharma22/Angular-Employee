import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  public getEmployees(){
    this.employeeService.getEmployees().subscribe((res) => {
    })
  }

}
