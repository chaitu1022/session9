import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-viewemployeedetails',
  templateUrl: './viewemployeedetails.component.html',
  styleUrls: ['./viewemployeedetails.component.css']
})
export class ViewemployeedetailsComponent {

  employee?: Employee;
  employeeId: number = 0;

  constructor(private appService: AppService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
       this.employeeId = Number(data.get('id'));
       this.employee = this.appService.getEmployeeByID(this.employeeId);
    });
    
  }

  NextEmployee() {
    this.employeeId++;
    this.router.navigate(["/viewEmployee", this.employeeId])
  }

  BackToEmployee() {
    this.router.navigate(["listEmployee", {previousEmployee: this.employeeId}], { queryParamsHandling: 'preserve' })
  // this.router.navigate(["listEmployee"], { queryParamsHandling: 'preserve' })
  }
}


    // this.activatedRoute.paramMap.subscribe(data => {
    //   this.employeeId = Number(data.get('id'));
    //   this.employee = this.appService.getEmployeeByID(this.employeeId);
    // });

    // this.employeeId = Number(this.activatedRoute.snapshot.paramMap.get('id')); 



    // https://angular.io/api/router/UrlTree#description