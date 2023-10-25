import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardService } from './dashboard.service';

let routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
