import { of, Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

import { Util } from '../common/Util';
import { delay } from 'rxjs/operators';
import { Step } from '../feature/model/step';
import { Feature } from '../feature/model/feature';
import { Scenario } from '../feature/model/scenario';
import { EditStepTagDialog } from './dialogs/tag/edit.step.tag.dialog';
import { EditStepReceiveDialog } from './dialogs/receive/edit.step.receive.dialog';
import { EditScenarioDescriptionDialog } from './dialogs/editscenario/edit.scenario.description';
import { EditStepDescriptionDialog } from './dialogs/editstep/edit.step.description';


@Component({
  selector: 'app-simplefeature',
  templateUrl: './simplefeature.component.html',
  styleUrls: ['./simplefeature.component.scss']
})
export class SimplefeatureComponent implements OnInit {
  features: Feature[] = [];
  currentFeature: Feature;
  currentScenario = new Scenario();
  currentStep: Step;

  featureText: string;
  scenarioText: string;
  stepText: string;

  userAction: string;

  addFeatureVisible = true;
  addFeatureButtonEnabled = false;
  showAddScenarioButton = false;

  private addStepAction = "addStep";
  private editScenarioAction = "editScenario";
  private addScenarioAction = "addScenario";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addFeature() {
    const feature = new Feature();
    feature.id = Util.key();
    feature.description = this.featureText;
    this.features.push(feature);

    this.featureText = null;
    this.featureSelected(feature.id)
    this.hideAddFeature();
  }

  deleteFeature(featureId) {
    const index = this.features.indexOf(this.filterFeature(featureId));
    this.features.splice(index, 1);
    if (featureId === this.currentFeature.id) {
      this.currentFeature = null;
    }
  }

  hideAddFeature() {
    this.featureText = null;
    this.addFeatureVisible = false;
    this.addFeatureButtonEnabled = true;
  }

  showAddFeature() {
    this.addFeatureVisible = true;
    this.addFeatureButtonEnabled = false;
  }

  currentFeatureDescription() {
    if (this.currentFeature != null) {
      return this.currentFeature.description;
    }
    return "";
  }

  isCurrentFeatureValid() {
    return this.currentFeature != null;
  }

  featureSelected(featureId) {
    this.currentFeature = this.filterFeature(featureId);
    this.showAddScenario();
  }

  enableAddStepForScenario(scenarioId) {
    this.setCurrentScenario(scenarioId);
    this.userAction = this.addStepAction;
  }

  enableInsertStep(scenarioId, stepId) {
    this.currentScenario = null;
    this.setcurrentStep(scenarioId, stepId);
  }

  setcurrentStep(scenarioId, stepId) {
    this.currentStep = this.filterStep(scenarioId, stepId);
  }

  setCurrentScenario(scenarioId) {
    this.currentScenario = this.filterScenario(scenarioId);
  }

  showAddScenario() {
    this.userAction = this.addScenarioAction;
    this.scenarioText = null;
    this.showAddScenarioButton = false;
    this.currentStep = null;
    this.stepText = null;
  }

  hideAddScenario() {
    this.scenarioText = null;
    this.userAction = null;
    this.showAddScenarioButton = true;
    this.currentStep = null;
  }

  hideInsertStep() {
    this.scenarioText = null;
  }

  isStepInputFieldVisible(scenarioId) {
    return this.currentScenario !== null && this.currentScenario.id == scenarioId && this.userAction === this.addStepAction;
  }

  isIncludeStepInputFieldVisible(scenarioId, stepId) {
    return this.currentStep != null && this.currentStep.id === stepId;
  }

  isScenarioInputFieldVisible() {
    return this.userAction === this.addScenarioAction;
  }

  filterFeature(featureId) {
    return this.features.find(feature => feature.id === featureId);
  }

  addScenario() {
    const scenario = new Scenario();
    scenario.id = Util.key();
    scenario.description = this.scenarioText;
    this.currentFeature.scenarios.push(scenario);
    this.hideAddScenario();
    this.enableAddStepForScenario(scenario.id);
  }


  deleteScenario(scenarioId) {
    const index = this.currentFeature.scenarios.indexOf(this.filterScenario(scenarioId));
    this.currentFeature.scenarios.splice(index, 1);
  }

  cancelAddScenario() {
    this.hideAddScenario();
  }

  filterScenario(scenarioId) {
    return this.currentFeature.scenarios.find(scenario => scenario.id === scenarioId);
  }

  newStep() {
    const step = new Step();
    step.id = Util.key();
    step.description = this.stepText;
    return step;
  }

  addStep(scenarioId) {
    const scenario = this.filterScenario(scenarioId);
    scenario.steps.push(this.newStep());
    this.stepText = null;
  }

  insertStep(scenarioId, stepId) {
    const scenario = this.filterScenario(scenarioId);
    const index = scenario.steps.indexOf(this.filterStep(scenarioId, stepId));
    scenario.steps.splice(index, 0, this.newStep());
    this.currentStep = null;
    this.stepText = null;
  }

  cancelAddStep() {
    this.currentScenario = null;
    this.hideAddScenario();
  }

  cancelInsertStep() {
    this.currentScenario = null;
    this.currentStep = null;
    this.hideInsertStep();
  }

  deleteStep(scenarioId, stepId) {
    const scenario = this.filterScenario(scenarioId);
    const index = scenario.steps.indexOf(this.filterStep(scenarioId, stepId));
    scenario.steps.splice(index, 1);
  }

  filterStep(scenarioId, stepId) {
    const scenario = this.filterScenario(scenarioId);
    return scenario.steps.find(step => step.id === stepId);
  }

  editScenarioDescription(scenarioId) {
    const scenario = this.filterScenario(scenarioId);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      scenarioText: `${scenario.description}`
    };
    let dialogRef = this.dialog.open(EditScenarioDescriptionDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => { scenario.description = data; }
    );

  }

  addTagToStep(scenarioId, stepId) {
    const step = this.filterStep(scenarioId, stepId);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      selectedTag: `${step.tag}`
    };
    let dialogRef = this.dialog.open(EditStepTagDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => { step.tag = data; }
    );
  }

  configureReceiveMessageForStep(scenarioId, stepId) {
    const scenario = this.filterScenario(scenarioId);
    const step = this.filterStep(scenarioId, stepId);

    const msg = JSON.stringify(step.receiveMessage);
    console.log('msg ', msg);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      scenarioText: `${scenario.description}`,
      stepText: `${step.description}`,
      selectedTag: `${step.tag}`,
      receiveMessage: `${msg}`
    };

    let dialogRef = this.dialog.open(EditStepReceiveDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data !== "cancel")
          step.receiveMessage = data;
      }
    );
  }

  editStepDescription(scenarioId, stepId) {
    const step = this.filterStep(scenarioId, stepId);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      stepText: `${step.description}`
    };
    let dialogRef = this.dialog.open(EditStepDescriptionDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => { step.description = data; }
    );
  }
}
