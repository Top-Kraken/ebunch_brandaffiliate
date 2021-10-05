import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { onMainContentChange } from 'src/app/_animations/animations';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-layout-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [onMainContentChange]
})
export class LayoutComponent implements OnInit {
  currentUserFullName: any;
  currentUserGmailID: any;
  userGender: any;
  public onSideNavChange: boolean | undefined;
  public onMobileSideNavChange: boolean | undefined;
  
  @Input() sidenav: MatSidenav | undefined;

  HeaderData = {
    showRegImg: false,
    showLogin_btn: false,
    isLoggedin: true
  }
  constructor(private sidenavService: SidenavService) {
    this.sidenavService.sideNavState$.subscribe((res: any) => {
      // console.log(res);
      this.onSideNavChange = res;
    });
    this.sidenavService.mobsideNavState$.subscribe((res: any) => {
      // console.log(res);
      this.onMobileSideNavChange = res;
    });
  }

  ngOnInit() { }

}
