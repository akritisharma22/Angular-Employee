import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-employee-list',
  templateUrl: './new-employee-list.component.html',
  styleUrls: ['./new-employee-list.component.scss']
})
export class NewEmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'salary', 'age', 'profile_picture'];
  dataSource : any;
  constructor() { }

  ngOnInit(): void {
    let array_new = JSON.parse(localStorage.getItem('New Employee') || '{}');
    this.dataSource = array_new;
  }

}
