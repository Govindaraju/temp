import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { MaterialModule } from './common/material.module';
import { FeatureComponent } from './feature/layout/feature.component';
import { ReportsComponent } from './reports/reports.component';
import { FeaturelistComponent } from './feature/featurelist/featurelist.component';
import { AddfeatureComponent } from './feature/addfeature/addfeature.component';
import { HomeComponent } from './home/home.component';
import { RunfeatureComponent } from './runfeature/runfeature.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FeatureComponent,
    ReportsComponent,
    FeaturelistComponent,
    AddfeatureComponent,
    HomeComponent,
    RunfeatureComponent
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
