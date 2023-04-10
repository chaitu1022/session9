import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class AppService implements Resolve<Employee[]> {

  private employees: Employee[] = [
    { id: 1, name: "rajesh", email: "g@gmail.com", phonenumber: "8098340324" },
    { id: 2, name: "mahesh", email: "g1@gmail.com", phonenumber: "8080980980" },
    { id: 3, name: "vinod", email: "g1@gmail.com", phonenumber: "8080980980" },
  ];

  counter: number = 4;

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employee[] | Observable<Employee[]> | Promise<Employee[]> {
    return this.getObservableEmployees();
  }

  addEmployee = (emp: Employee) => { 
    this.counter++
    this.employees.push({...emp, id: this.counter });
    console.log(this.employees);
  }
  
  getEmployee = () => this.employees;

  getEmployeeByID = (id: number) => this.employees.find(x => x.id === id);

  searchEmployee = (name: string) => this.employees.filter(x => x.name.includes(name));

  getObservableEmployees() : Observable<Employee[]> {
    return of(this.employees).pipe(delay(500));
  }

}



