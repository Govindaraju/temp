import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgPipesModule } from 'ngx-pipes';

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
import { SimplefeatureComponent } from './simplefeature/simplefeature.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { EditStepTagDialog } from './simplefeature/dialogs/tag/edit.step.tag.dialog';
import { AutofocusDirective } from './autofocus.directive';
import { EditStepReceiveDialog } from './simplefeature/dialogs/receive/edit.step.receive.dialog';
import { EditScenarioDescriptionDialog } from './simplefeature/dialogs/editscenario/edit.scenario.description';
import { EditStepDescriptionDialog } from './simplefeature/dialogs/editstep/edit.step.description';


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
    StepComponent,
    SimplefeatureComponent,
    EditStepTagDialog,
    EditStepReceiveDialog,
    EditScenarioDescriptionDialog,
    EditStepDescriptionDialog,
    AutofocusDirective
  ],
  entryComponents: [
    EditStepTagDialog,
    EditStepReceiveDialog,
    EditScenarioDescriptionDialog,
    EditStepDescriptionDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    MatDialogModule
  ],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
