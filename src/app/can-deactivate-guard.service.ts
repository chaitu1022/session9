import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { AddemployeeComponent } from "./addemployee/addemployee.component";

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<AddemployeeComponent> {
    canDeactivate(component: AddemployeeComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot): boolean {
        if (component.empForm?.dirty) {
            return confirm("are you sure to navigate?")
        }
        return true;
    }

}