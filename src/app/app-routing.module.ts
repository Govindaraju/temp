import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/layout/feature.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { RunfeatureComponent } from './runfeature/runfeature.component';
import { SteplistComponent } from './feature/steplist/steplist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeatureComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'run-feature', component: SteplistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
