import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {

employees:Employee[]=[];
  constructor(private employeeService:EmployeeService){}


  ngOnInit():void{
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;

    })
  }

}
