import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-view',
  templateUrl: './savings-view.component.html',
  styleUrls: ['./savings-view.component.scss']
})
export class SavingsViewComponent implements OnInit {
  savingsCategories = ['Rainy Day', 'Car Work', 'Spending'];
  constructor() {

  }

  ngOnInit() {
  }

}
