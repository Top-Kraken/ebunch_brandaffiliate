import { Component, Input, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  InputData: any = {};
  
  public onmobSideNavChange: boolean = false;
  constructor(private sidenavService: SidenavService) { }
  ngOnInit(): void {
    console.log(this.InputData)
  }

  toggle() {
    this.onmobSideNavChange = !this.onmobSideNavChange;
    this.sidenavService.mobsideNavState$.next(this.onmobSideNavChange);
  }
}
