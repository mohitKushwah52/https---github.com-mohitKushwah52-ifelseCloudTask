import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LibModule } from 'src/app/core/lib/lib.module';
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
    RouterModule.forChild(routes),
    LibModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
