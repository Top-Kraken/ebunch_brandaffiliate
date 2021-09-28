import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  HeaderData = {
    showRegImg: false,
    showLogin_btn: false
  }
  packages = ['package1', 'package2', 'package3']
  constructor() { }

  ngOnInit(): void {
  }

}
