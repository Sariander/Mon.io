import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ButtonObject } from "../bottom-nav/bottom-nav.component"
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../shared-data/authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileQuery: MediaQueryList;

  private index;

  toolbarTitle = localStorage.getItem("toolbarTitle");

  buttonObjectList: ButtonObject[] = [
    { text: "Home", index: 0, icon: "home", routeName: "home" },
    { text: "Budget", index: 1, icon: "list", routeName: "budget" },
    { text: "Expense", index: 2, icon: "list", routeName: "expenses" },
    { text: "Savings", index: 3, icon: "archive", routeName: "savings" },
    { text: "Reports", index: 4, icon: "toc", routeName: "reports" }
  ]

  fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  isOpen: Boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  private isLoggedIn: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
    private _router: Router,
    private auth: AuthenticationService) {

    if (localStorage.getItem("sideNavOpen")) {
      var open = localStorage.getItem("sideNavOpen");
      this.isOpen = (String(open) == "true") ? true : false;
    } else {
      localStorage.setItem("sideNavOpen", this.isOpen.toString());
    }

    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        var navEnd: NavigationEnd = val;
        var routeUrl = navEnd.url;
        routeUrl = routeUrl.replace('/', '');
        if (routeUrl == '') {
          this.index = 0;
        }
        var titleSet = false;
        for (let buttonObj of this.buttonObjectList) {
          if (buttonObj.routeName == routeUrl) {
            titleSet = true;
            this.index = buttonObj.index;
            if (routeUrl == "home") {
              this.toolbarTitle = "Mon.io";
            } else {
              this.toolbarTitle = buttonObj.text;
            }
          }
        }
        if(!titleSet) {
          this.toolbarTitle = "Mon.io";
        }
        localStorage.setItem("toolbarTitle", this.toolbarTitle);
      }
    });
  }

  ngOnInit() {
    this.auth.isAuthenticated.subscribe(loggedIn =>
      this.isLoggedIn = loggedIn
    );
  }

  onLoginClick() {
    this._router.navigate(['login']);
  }
  onLogOutClick() {
    this.auth.logOut();
  }
  onSignUpClick() {
    this._router.navigate(['home']);
  }

  SelectThisIndex(buttonIndex) {
    this._router.navigate([this.buttonObjectList[buttonIndex].routeName]);
  }

  SideNavToggle() {
    this.isOpen = !this.isOpen;
    localStorage.setItem("sideNavOpen", this.isOpen.toString());
  }
}
