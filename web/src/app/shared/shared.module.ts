import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SpinnerComponent],
  exports: [
    CommonModule,
    RouterModule,

    SpinnerComponent,
  ]
})
export class SharedModule { }
