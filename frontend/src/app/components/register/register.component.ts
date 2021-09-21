import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  page: any = 1;
  ngOnInit(): void {
  }

  navigate_page(pageNo: number, type: string) {
    this.page = pageNo
  }
}
