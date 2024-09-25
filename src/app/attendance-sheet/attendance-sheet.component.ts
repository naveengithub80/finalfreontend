import { Component, OnInit } from '@angular/core';
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

  employees:Employee[]= [
    { id: 1, name: 'John Doe', designation: 'Developer', attendance: {} },
    { id: 2, name: 'Jane Smith', designation: 'Designer', attendance: {} },
    // Add more employees here
  ];

  ngOnInit() {
    this.setDaysInMonth();
    this.initializeEmployeeAttendance();

  }
  // Sets the days of the current month
  setDaysInMonth() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
  }


  initializeEmployeeAttendance() {
    this.employees.forEach(employee => {
      employee.attendance = {};
      this.daysInMonth.forEach(day => {
        if (!employee.attendance[day]) {
          employee.attendance[day] = '';  // Initialize with an empty value
        }
 });
    });
  }

  

  goToPreviousMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.setDaysInMonth();
    this.initializeEmployeeAttendance(); // Reinitialize attendance for the new month

  }

  goToNextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.setDaysInMonth();
    this.initializeEmployeeAttendance(); // Reinitialize attendance for the new month

  }

  calculatePresentDays(attendance: any): number {
    return Object.values(attendance).filter(value => value === 'Present').length;
  }

  calculateAbsentDays(attendance: any): number {
    return Object.values(attendance).filter(value => value === 'Absent').length;
  }

  submitAttendance() {
    // Submit logic here
    console.log(this.employees);
  }
}








/*import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-attendance-sheet',
  templateUrl: './attendance-sheet.component.html',
  styleUrl: './attendance-sheet.component.css'
})
export class AttendanceSheetComponent implements OnInit  {
[x: string]: any;
  currentDate = new Date();
  currentMonthYear = '';
  
  dates: string[] = [];
  employees: any[] = [];

  constructor() {
    this.generateDates();
    this.loadEmployees();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Generate dates for a month (e.g., September)
  generateDates() {
    const month = 9; // September
    const year = 2024;
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      this.dates.push(i + '-' + month + '-' + year);
    }
  }

  // Load employees from a database (mock data for now)
  loadEmployees() {
    this.employees = [
      {
        id: 'E001',
        name: 'John Doe',
        designation: 'Developer',
        attendance: {},
        workingDays: 0,
        absentDays: 0
      },
      {
        id: 'E002',
        name: 'Jane Smith',
        designation: 'Designer',
        attendance: {},
        workingDays: 0,
        absentDays: 0
      }
      // Add more employees as needed
    ];

    // Initialize attendance
    this.employees.forEach(employee => {
      this.dates.forEach(date => {
        employee.attendance[date] = 'Absent'; // Default to 'Absent'
      });
    });
  }

  // Calculate working and absent days for each employee
  calculateDays(employee: any) {
    let workingDays = 0;
    let absentDays = 0;

    this.dates.forEach(date => {
      if (employee.attendance[date] === 'Present') {
        workingDays++;
      } else {
        absentDays++;
      }
    });

    employee.workingDays = workingDays;
    employee.absentDays = absentDays;
  }

  submitAttendance() {
    // Logic to submit attendance data to the backend
    console.log('Attendance Submitted', this.employees);
  }
  isCurrentDate(day: number): boolean {
    const today = new Date();
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();

    if (currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
      return today.getDate() === day;
    }    
    return false;
  }
  isToday(day: number): boolean {
    const today = new Date();
    const isCurrentMonth = this.currentDate.getMonth() === today.getMonth();
    const isCurrentYear = this.currentDate.getFullYear() === today.getFullYear();
    return isCurrentMonth && isCurrentYear && today.getDate() === day;
  }
}*/




