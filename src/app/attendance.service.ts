import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:8070/api/v1/employees"



}



