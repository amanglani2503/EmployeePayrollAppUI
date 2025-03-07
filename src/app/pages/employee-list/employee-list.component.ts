import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-employee-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees = [
    { 
      id: '1',
      name: 'Amarpa Kumar', 
      gender: 'Female', 
      departments: ['Sales', 'HR', 'Finance'], 
      salary: '₹ 10,000', 
      startDate: '29 Oct 2019', 
      image: 'assets/dp1.jpeg' 
    },
    { 
      id: '2',
      name: 'Mohammad Shaikh', 
      gender: 'Female', 
      departments: ['Sales', 'HR', 'Finance'], 
      salary: '₹ 10,000', 
      startDate: '29 Oct 2019', 
      image: 'assets/dp2.jpeg'  
    },
    { 
      id: '3',
      name: 'Bubere Qais', 
      gender: 'Male', 
      departments: ['Sales', 'HR', 'Finance'], 
      salary: '₹ 10,000', 
      startDate: '29 Oct 2019', 
      image: 'assets/dp3.jpeg'
    }
  ];
  
}
