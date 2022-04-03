import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.scss']
})
export class CreateEmployeesComponent implements OnInit {

  listOfNewEmployees: any = [];
  addEmployee!: FormGroup;
  submitted: boolean = false;
  file: any;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) { 
    this.addEmployee = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      image:[''],
    })
  }

  ngOnInit(): void {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.addEmployee.controls;
  }

  onSubmit(data:any): void{
    this.submitted = true;
    if(this.addEmployee.invalid){
      return;
    }
    const fd = {
      name: data.name ? data.name : '',
      salary: data.salary ?  data.salary : '',
      age: data.age ? data.age : '',
      image: data.image ? data.image : '',
    }
    this.listOfNewEmployees.push(fd);
    localStorage.setItem("New Employee", JSON.stringify(this.listOfNewEmployees));
    this.employeeService.addEmployee(fd).subscribe((res:any) => {
    })
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.addEmployee.reset();
}

  uploadImage(event: any){
    const file = event.target.file[0];
    const myReader = new FileReader;
    myReader.onload = (event) => {
      this.file = myReader.result;
    }
  }

}
