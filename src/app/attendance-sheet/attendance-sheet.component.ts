//attendance sheet.ts
import { Component, OnInit } from '@angular/core';
//import { AttendanceService } from './attendance.service'; // Import the service to handle backend calls
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Include this to call the Spring Boot backend API
//import{ EmployeeService } from '../employee.service;'

interface Attendance {
  [key: number]: string | undefined;
}

interface Employee {
  id: number;
  name: string;
  designation: string;
  attendance: Attendance;  // Keys are day numbers, values are strings ('Present'/'Absent')
}

@Component({
  selector: 'app-attendance-sheet',
  templateUrl: './attendance-sheet.component.html',
  styleUrls: ['./attendance-sheet.component.css']
})
export class AttendanceSheetComponent implements OnInit {
  currentMonth: Date = new Date();
  daysInMonth: number[] = [];
  today: Date = new Date(); // Holds today's actual date
  employees: any[] = [];


  constructor( private cdr: ChangeDetectorRef, private http: HttpClient) {
  }
  ngOnInit(){
    this.generateDaysInMonth();
    this.fetchEmployeeData();  // Fetch employees when component loads
  }


    generateDaysInMonth(): void {
      const year = this.currentMonth.getFullYear();
      const month = this.currentMonth.getMonth(); // Remember JavaScript months are 0-indexed
      const days = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
      this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1); // Fill the array with day numbers
    }
  

  /*goToPreviousMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.setDaysInMonth();
    this.initializeEmployeeAttendance(); // Reinitialize attendance for the new month

  }

  goToNextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.setDaysInMonth();
    this.initializeEmployeeAttendance(); // Reinitialize attendance for the new month

  }*/

   // Navigate to the previous month
  goToPreviousMonth() {
    this.currentMonth = new Date(this.currentMonth.setMonth(this.currentMonth.getMonth() - 1)); // Go to previous month
    this.generateDaysInMonth(); // Regenerate the days in the new month
    this.cdr.detectChanges(); // Ensure Angular detects the change and updates the view
  }

  // Navigate to the next month
  goToNextMonth() {
    this.currentMonth = new Date(this.currentMonth.setMonth(this.currentMonth.getMonth() + 1)); // Go to next month
    this.generateDaysInMonth(); // Regenerate the days in the new month
    this.cdr.detectChanges(); // Ensure Angular detects the change and updates the view
  }

  // Check if a given day is today, and enable the dropdown for the current day only
  isCurrentDate(day: number): boolean {
    return (
      day === this.today.getDate() &&
      this.currentMonth.getMonth() === this.today.getMonth() &&
      this.currentMonth.getFullYear() === this.today.getFullYear()
    );
  }

  // Fetch employee data from backend
  fetchEmployeeData() {
    this.http.get<any[]>('http://localhost:8070/api/employees').subscribe((data) => {
      this.employees = data.map(employee => ({
        ...employee,
        attendance: {}
      }));
    });
  }

 

  calculatePresentDays(attendance: any): number {
    return Object.values(attendance).filter(value => value === 'Present').length;
  }

  calculateAbsentDays(attendance: any): number {
    return Object.values(attendance).filter(value => value === 'Absent').length;
  }

  // Submit attendance to backend
  submitAttendance() {
    const attendanceData = this.employees.map(employee => ({
      id: employee.id,
      attendance: employee.attendance
    }));

    this.http.post('http://localhost:8070/api/attendance', attendanceData).subscribe(() => {
      console.log('Attendance submitted successfully');
    });
}
}





