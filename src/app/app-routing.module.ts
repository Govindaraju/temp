import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/layout/feature.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { SteplistComponent } from './feature/steplist/steplist.component';
import { ScenariolistComponent } from './feature/scenariolist/scenariolist.component';
import { LayoutComponent } from './featureaccordian/layout/layout.component';
import { SimplefeatureComponent } from './simplefeature/simplefeature.component';
import { RunfeatureComponent } from './runfeature/runfeature.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: SimplefeatureComponent },
  { path: 'reports', component: LayoutComponent },
  { path: 'run-feature', component: RunfeatureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
