import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AddemployeeComponent } from "./addemployee/addemployee.component";

@Injectable()
export class AddEmployeeDeactivate implements CanDeactivate<AddemployeeComponent> {
    canDeactivate(component: AddemployeeComponent, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            console.log(component.empForm?.dirty);
            if(component.empForm?.dirty) {
                return confirm("are you sure to navigate?");
            }
        return true;
    }

}