import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsViewComponent } from './savings-view/savings-view.component';
import { MatListModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SavingsRoutingModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [SavingsViewComponent]
})
export class SavingsModule { }
