import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeesComponent } from './components/dashboard/create-employees/create-employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NewEmployeeListComponent } from './components/new-employee-list/new-employee-list.component';
import { NewEmployeesComponent } from './components/new-employees/new-employees.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'trash', component:TrashComponent},
  {path: 'create-employee', component:CreateEmployeesComponent},
  {path: 'new-employee-list', component:NewEmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
