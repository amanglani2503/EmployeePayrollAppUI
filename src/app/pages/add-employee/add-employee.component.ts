import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee, EmployeeService } from '../../services/employee.service';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  imports: [FormsModule]
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      profilePic: ['', Validators.required],
      gender: ['', Validators.required],
      departments: [[]],
      salary: ['', Validators.required],
      startDate: ['', Validators.required],
      note: ['']
    });
  }

  submitForm(event: Event, employeeForm: NgForm) {
    event.preventDefault();
    if (employeeForm.invalid) {
      alert("Please fill all the required fields.");
      return;
    }

    // Extract form values
    const formData = employeeForm.value;

    // Collect selected departments
    const selectedDepartments: string[] = [];
    if (formData.deptHR) selectedDepartments.push("HR");
    if (formData.deptSales) selectedDepartments.push("Sales");
    if (formData.deptFinance) selectedDepartments.push("Finance");
    if (formData.deptEngineer) selectedDepartments.push("Engineer");
    if (formData.deptOthers) selectedDepartments.push("Others");

    // Create final object with Employee interface
    const employeeData: Employee = {
      id: formData.id,
      name: formData.name,
      profilePic: formData.profile,  // Adjusted to match the `Employee` interface
      gender: formData.gender,
      departments: selectedDepartments,
      salary: formData.salary,
      startDate: `${formData.day}-${formData.month}-${formData.year}`,
      note: formData.notes
    };
    console.log(employeeData);

    // Send data to backend using EmployeeService
    this.employeeService.addEmployee(employeeData).subscribe({
      next: (response) => {
        console.log('Employee added successfully:', response);
        alert('Employee added successfully!');
        employeeForm.resetForm(); // Clear the form after successful submission
      },
      error: (error) => {
        console.error('Error adding employee:', error);
        alert('Failed to add employee. Please try again.');
      }
    });
  }
}
