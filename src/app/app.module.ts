import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Correct import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { ManagerdashComponent } from './managerdash/managerdash.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    HomeComponent,
    LoginComponent,
    AdminloginComponent,
    EmployeeFormComponent,
    ManagerloginComponent,
    ManagerdashComponent,
    AttendanceSheetComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch()) // Correct provider configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
