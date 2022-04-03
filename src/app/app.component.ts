import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employees-app';

  sideBarOpen = true;

  ngOnInit(){ 
  }

  public sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
