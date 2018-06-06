import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { MaterialModule } from './common/material.module';

import { ReportsComponent } from './reports/reports.component';
import { FeaturelistComponent } from './feature/featurelist/featurelist.component';
import { AddfeatureComponent } from './feature/addfeature/addfeature.component';
import { HomeComponent } from './home/home.component';
import { RunfeatureComponent } from './runfeature/runfeature.component';
import { SteplistComponent } from './feature/steplist/steplist.component';
import { ScenariolistComponent } from './feature/scenariolist/scenariolist.component';
import { LayoutComponent } from './featureaccordian/layout/layout.component';
import { ScenarioComponent } from './featureaccordian/scenario/scenario.component';
import { StepComponent } from './featureaccordian/step/step.component';
import { FeatureComponent } from './featureaccordian/feature/feature.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FeatureComponent,
    ReportsComponent,
    FeaturelistComponent,
    AddfeatureComponent,
    HomeComponent,
    RunfeatureComponent,
    SteplistComponent,
    ScenariolistComponent,
    LayoutComponent,
    ScenarioComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
