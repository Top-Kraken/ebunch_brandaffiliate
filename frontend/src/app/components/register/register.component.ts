import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {

  Countries: any;
  states: any;
  industries: any;
  registrationForm: any;
  constructor(private configServive: ConfigService) { }
  page: any = 1;
  ngOnInit(): void {
    this.getAllCountries();
    this.getIndustries();

    this.registrationForm = new FormGroup({
      companyName: new FormControl(""),
      firstName: new FormControl(""),
      lastName: new FormControl(),
      industryId: new FormControl(),
      addressLine1: new FormControl(""),
      addressLine2: new FormControl(""),
      city: new FormControl(""),
      stateId: new FormControl(),
      countryId: new FormControl(),
      zipCode: new FormControl(""),
      mapLocations: new FormControl(""),
      companyEmail: new FormControl(""),
      companyPhone: new FormControl(""),
      personalEmail: new FormControl(""),
      personalPhone: new FormControl("")
    });
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

  getAllCountries() {
    this.configServive.getCountryCode().subscribe((res: any) => {
      let countryCodesdata = res;
      this.Countries = countryCodesdata.response.countryList;
      console.log(this.Countries);
    }, (err) => {
      console.log(err);
    });
  }

  getIndustries() {
    this.configServive.getAllIndustries().subscribe((res: any) => {
      console.log(res)
      let industryData = res;
      this.industries = industryData.response.industryList;
      console.log(this.industries);
    }, (err) => {
      console.log(err);
    });
  }

  onFormSubmit(formData: any) {
    console.log(formData);
  }
}


// {
//   "mapLocations":[{"lat":"12.11","lng":"12.13"},{"lat":"12.45","lng":"12.4643"}],
//   }

// data
// userPhoto
// companyLogo
