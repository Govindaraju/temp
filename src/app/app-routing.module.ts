import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/layout/feature.component';
import { ReportsComponent } from './reports/reports.component';
import { TreeComponent } from './feature/tree/temp/tree.component';

const routes: Routes = [
  { path: '', component: FeatureComponent },
  { path: 'features', component: FeatureComponent },
  { path: 'reports', component: TreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
