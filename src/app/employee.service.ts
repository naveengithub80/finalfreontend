import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

 
  private baseUrl="http://localhost:8070/api/v1/employees"


  getEmployeeList():Observable<Employee []>{

    return this.httpClient.get<Employee[]>(`${this.baseUrl}`)

  }

}
