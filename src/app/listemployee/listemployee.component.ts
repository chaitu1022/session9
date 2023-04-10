import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  Employees: Employee[] = [];
  previouslySelectedId: number = 0;
  searchText: string = "";

  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) {

    if(this.activatedRoute.snapshot.paramMap.has("previousEmployee")) {
      this.previouslySelectedId = Number(this.activatedRoute.snapshot.paramMap.get("previousEmployee"));
    }

    if(this.activatedRoute.snapshot.queryParamMap.has("empSearch")) {
      this.searchText = String(this.activatedRoute.snapshot.queryParamMap.get("empSearch"));
      this.searchEmployee();
    }


    // if (this.activatedRoute.snapshot.queryParamMap.has('searchText')) {
    //   this.searchText = String(this.activatedRoute.snapshot.queryParamMap.get('searchText'));
    //   this.searchEmployee();
    // }
  }

  ngOnInit() {
    //this.searchEmployee();
    //this.appService.getObservableEmployees().subscribe(data => this.Employees = data);
    this.Employees = this.activatedRoute.snapshot.data["employeeData"];
  }

  searchEmployee() {
    this.Employees = this.appService.searchEmployee(this.searchText);
  }

}


// if (this.activatedRoute.snapshot.paramMap.has('id')) {
//   this.previouslySelectedId =  Number(this.activatedRoute.snapshot.paramMap.get("id"));
//   console.log(this.previouslySelectedId);
// }
