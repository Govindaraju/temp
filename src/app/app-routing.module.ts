import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/layout/feature.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { RunfeatureComponent } from './runfeature/runfeature.component';
import { SteplistComponent } from './feature/steplist/steplist.component';
import { ScenariolistComponent } from './feature/scenariolist/scenariolist.component';
import { LayoutComponent } from './featureaccordian/layout/layout.component';
import { SimplefeatureComponent } from './simplefeature/simplefeature.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: LayoutComponent },
  { path: 'reports', component: SimplefeatureComponent },
  { path: 'run-feature', component: ScenariolistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
