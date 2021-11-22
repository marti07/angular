import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'https://localhost:44373/api';
readonly PhotoUrl = 'https://localhost:44373/Photos/';

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department')
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/department', val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/department', val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employee')
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/employee', val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/employee', val);   
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/employee/' + val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl +'/Employee/SaveFile/', val);
  }

  GetAllDepartmentsName(){
    return this.http.get(this.APIUrl +'/Employee/GetAllDepartmentsName');
  }

}
