import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { NewEmployeesComponent } from '../new-employees/new-employees.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  new_employee = '';
  employeeList: any;
  displayedColumns: string[] = ['id', 'name', 'salary', 'age', 'profile_picture', 'delete', 'edit'];
  dataSource: any;
  deletedData: any = [];
  data: any = [];
  employeeId: any;
  employeeName: any;
  noDataMessage: string = 'There are no data available';

  constructor(
    private employeeService: EmployeeService,
    public matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe((res: any) => {
      if (res.status === 'success') {
        this.employeeList = res;
        this.data = res.data;
        this.dataSource = new MatTableDataSource(this.data);
      }
    })
  }
  openModule(id: number, name: string) {
    const dialogRef = this.matDialog.open(NewEmployeesComponent, {
      width: '250px',
      id: 'employee-info',
      data: { id: id, name: name }
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }

  addElement() {
    this.data.push({ id: 1, employee_name: this.new_employee, employee_age: 58, employee_salary: 71000 });
    this.dataSource = new MatTableDataSource(this.data);
  }

  deleteData(id: number, name: string, salary: number, age: number, image: string) {
    let myArray = [id, name, salary, age, image];
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      alert("Your data has been successfully deleted");
      this.deletedData.push(myArray);
      localStorage.setItem("Deleted Employee", JSON.stringify(this.deletedData));
    });
  }

  editEmployee(id: number, name: string, salary: number, age: number, image: string) {
    const fd = {
      name: name ? name : '',
      salary: salary ? salary : '',
      age: age ? age : '',
      image: image ? image : '',
    }
    this.employeeService.updateEmployee(id, fd).subscribe((res) => {
    })
  }

  
}
  

  
  // updateEmployee(id: number , formData: any){
  //   return this.http.put(this.baseUrl+ 'update/' + id, {formData});
  // }


