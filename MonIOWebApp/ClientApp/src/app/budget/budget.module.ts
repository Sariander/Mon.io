import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { MatListModule, MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BudgetRoutingModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  declarations: [BudgetViewComponent]
})
export class BudgetModule { }
