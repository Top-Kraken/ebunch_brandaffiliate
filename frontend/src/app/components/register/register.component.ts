import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(1000, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {

  Countries: any;
  states: any;
  industries: any;
  constructor(private configServive: ConfigService) { }
  page: any = 1;
  ngOnInit(): void {
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    this.configServive.getCountryCode().subscribe((res: any) => {
      let countryCodesdata = res;
      this.Countries = countryCodesdata.response.countryList;
      console.log(this.Countries);
    });
    this.configServive.getAllIndustries().subscribe((res: any) => {
      console.log(res)
      let industryData = res;
      this.industries = industryData.response.industryList;
      console.log(this.industries);
    })
  }

  oncountrychange(event: any) {
    console.log(event);
    this.states = [];
    this.configServive.getStates_with_CountryCode(event.value).subscribe((res: any) => {
      let stateData = res;
      this.states = stateData.response.stateList;
      console.log(this.states);
    })
  }
  navigate_page(pageNo: number, type: string) {
    this.page = pageNo;
  }
}
