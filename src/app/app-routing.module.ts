import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/layout/feature.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: FeatureComponent },
  { path: 'features', component: FeatureComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
