import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
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
export class ProfileComponent implements OnInit {
  HeaderData = {
    showRegImg: false,
    showLogin_btn: false
  }
  profileForm: any;
  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      facebook: new FormControl(""),
      instagram: new FormControl(""),
      linkedin: new FormControl("")
    })
  }

}
