import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsViewComponent } from './savings-view/savings-view.component';
import { MatListModule, MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SavingsRoutingModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [SavingsViewComponent]
})
export class SavingsModule { }
