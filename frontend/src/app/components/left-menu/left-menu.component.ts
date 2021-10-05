import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { onSideNavChange, animateText, onMobileSideNavChange } from 'src/app/_animations/animations';
import { SidenavService } from 'src/app/services/sidenav.service';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText, onMobileSideNavChange]
})
export class LeftMenuComponent implements OnInit {
  sideNavState: any;
  linkText: any;
  sidenav: any;
  menuItems = [
    { link: '/layout/dashboard', icon: '../../../assets/Home.PNG', title: 'Home' },
    { link: '/packages', icon: '../../../assets/Promotions.PNG', title: 'Promotions' },
    { link: '/profile', icon: '../../../assets/Affiliates.PNG', title: 'Affiliates' },
    { link: '/register', icon: '../../../assets/Prospects.PNG', title: 'Prospects' },
    { link: '/dashboard', icon: '../../../assets/Commission.PNG', title: 'Commision Payments' },
    { link: '/manage-pathologists', icon: '../../../assets/message.PNG', title: 'Upload Assets' },
    { link: '/manage-pathologists', icon: '../../../assets/Settings.PNG', title: 'Settings' }
  ];

  constructor(private sidenavService: SidenavService) { 

    this.sidenavService.mobsideNavState$.subscribe((res: any) => {
      // console.log(res);
      this.linkText = res;
    });
  }

  // @HostListener('mouseover') onMouseOver() {
  //   this.onSinenavToggle();
  // }

  // @HostListener('mouseout') onMouseOut() {
  //   this.onSinenavToggle();
  // }
  ngOnInit() {
    this.sideNavState = false;
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this.sidenavService.sideNavState$.next(this.sideNavState);
    // console.log(this.sidenavService.sideNavState$);
  }

}
