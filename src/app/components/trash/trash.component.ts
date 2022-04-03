import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  listOfDeletedEmployees : any;

  constructor() { }
  displayedColumns: string[] = ['id', 'name', 'salary', 'age', 'profile_picture'];
  deletedEmployees =  [
    {id: 134, name: 'Hari Ram', age: 13 , image:'123.jpg'},
    {id: 24, name: 'Hari Ram', age: 13 , image:'123.jpg'},
    {id: 134547, name: 'Hari Ram', age: 13 , image:'123.jpg'}
  ]
  ngOnInit(): void {
      let array_trash = JSON.parse(localStorage.getItem('Deleted Employee') || '{}');
      this.deletedEmployees = array_trash;;
  }

}
