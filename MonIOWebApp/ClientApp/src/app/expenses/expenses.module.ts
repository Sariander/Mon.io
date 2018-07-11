import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpenseViewComponent } from './expense-view/expense-view.component';
import { MatListModule, MatCardModule, MatGridListModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { ColorTypePipe } from './color-type.pipe';

@NgModule({
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatProgressBarModule
  ],
  declarations: [ExpenseViewComponent, ColorTypePipe]
})
export class ExpensesModule { }
