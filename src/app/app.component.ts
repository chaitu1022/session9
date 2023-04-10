import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session8';
 enableSpinner: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(filter((e: any): e is RouterEvent => e instanceof RouterEvent))
     .subscribe((evt: RouterEvent) => {
       if(evt instanceof NavigationStart) {
        this.enableSpinner = true;
       }

       if(evt instanceof NavigationEnd) {
        setTimeout(() => {
          this.enableSpinner = false;
        }, 1000);
       
       }
     });
  }

  // constructor(private router: Router) {
  //   this.router.events.pipe(filter((e: any): e is RouterEvent => e instanceof RouterEvent))
  //   .subscribe((evt: RouterEvent) => {
  //     if(evt instanceof NavigationStart) {
  //       this.enableSpinner = true;
  //     }

  //     if(evt instanceof NavigationEnd) {
  //       setTimeout(() => {
  //         this.enableSpinner = false;
  //       }, 1000);
       
  //     }
  //   });
  // }

}
