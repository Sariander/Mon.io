import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.scss']
})
export class ExpenseViewComponent implements OnInit {

  expenseCategories : ExpenseCategory[] = [
    { 
      name : "Food",
      currentExpense : 328,
      totalExpense : 300
    },
    { 
      name : "Gas and Maintenance",
      currentExpense : 54,
      totalExpense : 150
    },
    { 
      name : "Other Expenses",
      currentExpense : 400,
      totalExpense : 450
    }
  ];

  current = 54;
  total = 150;
  mode = 'determinate';
  value = ((this.current / this.total) * 100);

  constructor() { }

  ngOnInit() {
  }

  OnExpenseCategoryClick(category : ExpenseCategory){
    console.log(category.name + " clicked");
  }
}

export class ExpenseCategory {
  name : string;
  currentExpense : number;
  totalExpense : number;
}
