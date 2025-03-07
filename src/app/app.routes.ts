import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'employee-list', component: EmployeeListComponent}
];
