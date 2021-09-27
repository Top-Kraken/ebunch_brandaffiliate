import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

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
  states: Array<any> = [];
  industries: any;
  registrationForm: any;
  dragAreaClass: any;
  logoFileName: any;
  userFileName: any;
  imageURL: any; logoFile: any; userFile: any;
  HeaderData = {
    showRegImg: true,
    showLogin_btn: true
  }
  constructor(private configService: ConfigService, private registerService: RegisterService) { }
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
    this.configService.getStates_with_CountryCode(event.value).subscribe((res: any) => {
      let stateData = res;
      this.states = stateData.response.stateList;
      console.log(this.states);
    })
  }

  navigate_page(pageNo: number, type: string) {
    this.page = pageNo;
  }

  getAllCountries() {
    this.configService.getCountryCode().subscribe((res: any) => {
      let countryCodesdata = res;
      this.Countries = countryCodesdata.response.countryList;
      console.log(this.Countries);
    }, (err) => {
      console.log(err);
    });
  }

  getIndustries() {
    this.configService.getAllIndustries().subscribe((res: any) => {
      console.log(res)
      let industryData = res;
      this.industries = industryData.response.industryList;
      console.log(this.industries);
    }, (err) => {
      console.log(err);
    });
  }

  onFormSubmit(Data: any) {
    let formData = new FormData();
    formData.append('data', JSON.stringify(this.registrationForm.value));
    console.log(JSON.stringify(this.registrationForm.value))
    // formData.append('userPhoto', this.userFile, this.userFileName);
    // formData.append('companyLogo', this.logoFile, this.logoFileName);
    // this.registerService.registerUser(formData).subscribe((res: any) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // })
  }

  onFileChange(event: any, type: string) {
    if (type == 'companyLogo') {
      this.logoFile = event.target.files[0];
      this.logoFileName = event.target.files[0].name;
    } else if (type == 'userPhoto') {
      this.userFile = event.target.files[0];
      this.userFileName = event.target.files[0].name;
    }
    // const file = event.target.files[0];

    // var reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);
    // reader.onload = (_event) => {
    //   console.log(reader.result)
    //   if (type == 'companyLogo') this.logoFile = reader.result;
    //   else if (type == 'userPhoto') this.userFile = reader.result;
    //   this.imageURL = reader.result;
    // }
  }

  clearfiles(type: string) {
    if (type == 'companyLogo') this.logoFileName = null;
    else if (type == 'userPhoto') this.userFileName = null;
  }
}


// {
//   "mapLocations":[{"lat":"12.11","lng":"12.13"},{"lat":"12.45","lng":"12.4643"}],
//   }
