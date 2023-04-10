import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { ViewemployeedetailsComponent } from './viewemployeedetails/viewemployeedetails.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppService } from './app.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { AddEmployeeDeactivate } from './add-employee-deactivate.service';

const routeConfig: Routes = [
  { path:'', redirectTo: 'addEmployee', pathMatch:'full' },
  { path:'addEmployee', component: AddemployeeComponent, canDeactivate: [AddEmployeeDeactivate] },
  { path:'listEmployee', component: ListemployeeComponent, resolve: { employeeData: AppService } },
  { path:'viewEmployee/:id', component:ViewemployeedetailsComponent },
  { path: '**', component: PagenotfoundComponent }
];

//resolve: { employees: AppService } 
// canDeactivate: [CanDeactivateGuardService]

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    ListemployeeComponent,
    ViewemployeedetailsComponent,
    HeaderComponent,
    PagenotfoundComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [AddEmployeeDeactivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
