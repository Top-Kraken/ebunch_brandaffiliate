import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';


export interface PeriodicElement {
  name: string;
  email: string;
  phone: string;
  procured: string;
  leadSource: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Jody Roberts', email: 'frosty1956@gmail.com', phone: '(304) 788-9444', procured: 'NO', leadSource: 'Registration'},
  {name: 'Hazel Hollis', email: 'HazelHollis@gmail.com', phone: '(573) 647-6250', procured: 'NO', leadSource: 'Registration'},
  {name: 'Kevin Holtmertz', email: 'Kdholtmar_zat@yahoo.com', phone: '(573) 788-9444', procured: 'NO', leadSource: 'Registration'},
  {name: 'Frank Martinez', email: 'helpingsomeone@gmail.com', phone: '(512) 269-8621', procured: 'NO', leadSource: 'Registration'},
  {name: 'Jody Roberts', email: 'frosty1956@gmail.com', phone: '(304) 788-9444', procured: 'NO', leadSource: 'Registration'},
  {name: 'Jody Roberts', email: 'frosty1956@gmail.com', phone: '(304) 788-9444', procured: 'NO', leadSource: 'Registration'},
  {name: 'Hazel Hollis', email: 'HazelHollis@gmail.com', phone: '(573) 647-6250', procured: 'NO', leadSource: 'Registration'},
  {name: 'Kevin Holtmertz', email: 'Kdholtmar_zat@yahoo.com', phone: '(573) 788-9444', procured: 'NO', leadSource: 'Registration'},
  {name: 'Frank Martinez', email: 'helpingsomeone@gmail.com', phone: '(512) 269-8621', procured: 'NO', leadSource: 'Registration'},
  {name: 'Jody Roberts', email: 'frosty1956@gmail.com', phone: '(304) 788-9444', procured: 'NO', leadSource: 'Registration'},

  {name: 'Jody Roberts', email: 'frosty1956@gmail.com', phone: '(304) 788-9444', procured: 'NO', leadSource: 'Registration'},
  {name: 'Hazel Hollis', email: 'HazelHollis@gmail.com', phone: '(573) 647-6250', procured: 'NO', leadSource: 'Registration'},
  {name: 'Kevin Holtmertz', email: 'Kdholtmar_zat@yahoo.com', phone: '(573) 788-9444', procured: 'NO', leadSource: 'Registration'},
  {name: 'Frank Martinez', email: 'helpingsomeone@gmail.com', phone: '(512) 269-8621', procured: 'NO', leadSource: 'Registration'},
  {name: 'Jody Roberts', email: 'frosty1956@gmail.com', phone: '(304) 788-9444', procured: 'NO', leadSource: 'Registration'},

  {name: 'Jody Roberts', email: 'frosty1956@gmail.com', phone: '(304) 788-9444', procured: 'NO', leadSource: 'Registration'},
  {name: 'Hazel Hollis', email: 'HazelHollis@gmail.com', phone: '(573) 647-6250', procured: 'NO', leadSource: 'Registration'},
  {name: 'Kevin Holtmertz', email: 'Kdholtmar_zat@yahoo.com', phone: '(573) 788-9444', procured: 'NO', leadSource: 'Registration'},
  {name: 'Frank Martinez', email: 'helpingsomeone@gmail.com', phone: '(512) 269-8621', procured: 'NO', leadSource: 'Registration'},
  {name: 'Jody Roberts', email: 'frosty1956@gmail.com', phone: '(304) 788-9444', procured: 'NO', leadSource: 'Registration'},

];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Email', 'Phone', 'Procured?', 'LeadSource'];
  dataSource = ELEMENT_DATA;

  statuscards: any = [];

  public lineChartData: ChartDataSets[] = [
    { data: [15, 10, 5, 6, 8, 6, 5], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['21', '22', '23', '24', '25', '26', '27'];

  public barChartOptions: ChartOptions = {
    responsive: false,
  };

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  public lineChartOptions: any = {
    responsive: false,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: false,
          steps: 3,
          stepValue: 10,
          max: 15
        }
      }]
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart - Legend'
    }
    // scales: {
    //   yAxes: [
    //     {
    //       display: true,
    //       scaleLabel: {
    //         display: true,
    //         labelString: "Number of Reads",
    //       },
    //     }
    //   ],
    //   xAxes: [
    //     {
    //       scaleLabel: {
    //         display: true,
    //         labelString: "Date",
    //       },
    //     },

    //   ],
    // },
    // responsive: true,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: '#cd569d',
      backgroundColor: '#cd569d59',
    },
  ];

  public barChartColors: Color[] = [
    {
      borderColor: '#cd569d',
      backgroundColor: '#cd569d59',
    },
  ];

  public lineChartLegend = true;
  public lineChartPlugins = [];

  
  public doughnutChartLabels: Label[] = ['A', 'B', 'C'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  settings: any = [
    { name: 'Jody Roberts' },
    { name: 'Hazel Hollis' },
    { name: 'Dominic Goodwin' },
    { name: 'Betty Philips' },
    { name: 'Alicia Martin' },
    { name: 'Jody Roberts' },
    { name: 'Hazel Hollis' },
    { name: 'Dominic Goodwin' },
    { name: 'Betty Philips' },
    { name: 'Alicia Martin' }
  ]


  constructor() { }

  ngOnInit(): void {
    this.statuscards = [
      { 'name': 'Total Registered Affiliates', 'value': 4905 },
      { 'name': 'Total Prospects', 'value': 3316 },
      { 'name': 'Lead Procured', 'value': 200 },
      { 'name': 'Total Sales Value', 'value': 428 },
      { 'name': 'Total Affiliate Commission', 'value': 3108 },
      { 'name': 'Leaad Frequency', 'value': 1920 }
    ]

  }

}
