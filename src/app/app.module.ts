import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { MaterialModule } from './common/material.module';
import { FeatureComponent } from './feature/layout/feature.component';
import { ReportsComponent } from './reports/reports.component';
import { FeaturelistComponent } from './feature/featurelist/featurelist.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FeatureComponent,
    ReportsComponent,
    FeaturelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
