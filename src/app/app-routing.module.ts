import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent} from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path: 'employee', component:EmployeeComponent},
  {path: 'department', component:DepartmentComponent},
  {path: 'map', component:MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
