import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'adlogin',component:AdminloginComponent},
  {path:'admindash',component:AdmindashComponent},
  {path:'addEmployee',component:EmployeeFormComponent},
  {path: 'managerlogin',component:ManagerloginComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
