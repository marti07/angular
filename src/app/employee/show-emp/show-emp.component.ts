import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ModalTitle:string="";
  ActivateAddEditEmpComp:boolean = false;
  emp:any={};

  EmployeeIdFilter:string="";
  EmployeeNameFilter:string="";
  DepartmentFilter:string="";
  DateOfJoiningFitler:String="";
  EmployeeListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
      this.emp={ 
        EmployeeId:0,
        EmployeeName:"",        
        Department:"",
        DateOfJoining:"",
        PhotoFileName:"anonymous.jpeg"
      }
      this.ModalTitle = "Add Employee";
      this.ActivateAddEditEmpComp=true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  editClick(item:any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm("Are you sure?")){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
          alert(data.toString());
          this.refreshEmpList();  
      })
    }
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList = data  
      this.EmployeeListWithoutFilter = data;    
    });
  }

  FilterFn(){
    
    var EmployeeIdFilter = this.EmployeeIdFilter;
    var EmployeeNameFilter = this.EmployeeNameFilter;
    var DepartmentFilter = this.DepartmentFilter;
    var DateOfJoiningFitler= this.DateOfJoiningFitler;

  
    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function(el:any){
      return el.EmployeeId.toString().toLowerCase().includes(
        EmployeeIdFilter.toString().toLowerCase()
      )&&
      el.EmployeeName.toString().toLowerCase().includes(
        EmployeeNameFilter.toString().toLowerCase()
      )&&
      el.Department.toString().toLowerCase().includes(
        DepartmentFilter.toString().toLowerCase()
      )&&
      el.DateOfJoining.toString().toLowerCase().includes(
        DateOfJoiningFitler.toString().toLowerCase()
      )
    });
  
  }
  
  sortResult(prop:string, asc:boolean){
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function(a:any, b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 : 0) ;
      }
      else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 : 0) ;
      }
    });
  }
}
