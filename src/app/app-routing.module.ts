import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { ManagerdashComponent } from './managerdash/managerdash.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeedashComponent } from './employeedash/employeedash.component';
import { AdminauthguardService } from './adminauthguard.service';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'adlogin',component:AdminloginComponent},
  {path:'admindash',component:AdmindashComponent,canActivate:[AdminauthguardService]},
  {path:'addEmployee',component:EmployeeFormComponent,canActivate:[AdminauthguardService]},
  {path: 'managerlogin',component:ManagerloginComponent},
  {path: 'managerdash', component:ManagerdashComponent,canActivate:[AdminauthguardService]},
  {path: 'attendance-sheet', component:AttendanceSheetComponent},
  {path: 'employeelogin',component:EmployeeloginComponent},
  {path: 'employeedash',component:EmployeedashComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
