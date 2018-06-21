import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-view',
  templateUrl: './savings-view.component.html',
  styleUrls: ['./savings-view.component.scss']
})
export class SavingsViewComponent implements OnInit {

  start = 0;
  end = 2;

  savingsCategories: SavingsCategory[] = [
    {
      name: "Rainy Day", 
      value: 7408.14,
      details: [
        { year: 2017, value: 3066.27 },
        { year: 2016, value: 2749.44 },
        { year: 2015, value: 1592.43 }
      ]
    },
    {
      name: "Car Work", 
      value: 173.58,
      details: [
        { year: 2017, value: -297.78 },
        { year: 2016, value: 425.61 },
        { year: 2015, value: 45.75 }
      ]
    },
    {
      name: "Spending", 
      value: 3888.01,
      details: [
        { year: 2017, value: 2588.34 },
        { year: 2016, value: 1111.96 },
        { year: 2015, value: 187.71 }
      ]
    },
  ];
  constructor() {

  }

  ngOnInit() {
  }

}

export class SavingsCategory {
  name: string;
  value;
  details: YearData[];
}

export class YearData {
  year: number;
  value: number;
}