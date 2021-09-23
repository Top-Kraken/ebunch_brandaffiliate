import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Countries: any;
  states: any;
  industries: any;
  constructor(private configServive: ConfigService) { }
  page: any = 1;
  ngOnInit(): void {
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
