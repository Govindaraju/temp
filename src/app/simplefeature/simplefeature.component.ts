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


@Component({
  selector: 'app-simplefeature',
  templateUrl: './simplefeature.component.html',
  styleUrls: ['./simplefeature.component.scss']
})
export class SimplefeatureComponent implements OnInit {

  features: Feature[] = [];
  currentFeature: Feature;
  currentScenario = new Scenario();

  featureText: string;
  scenarioText: string;
  stepText: string;

  addFeatureVisible = true;
  addFeatureButtonEnabled = false;
  showScenarioInputField = false;
  showAddScenarioButton = false;

  // constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addFeature() {
    const feature = new Feature();
    feature.id = Util.key();
    feature.description = this.featureText;
    this.features.push(feature);

    this.featureText = null;
    this.featureSelected(feature.id)
  }

  deleteFeature(featureId) {
    const index = this.features.indexOf(this.filterFeature(featureId));
    this.features.splice(index, 1);
    if (featureId === this.currentFeature.id) {
      this.currentFeature = null;
    }
  }

  cancelAddFeature() {
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
    this.currentScenario = this.filterScenario(scenarioId);
  }

  showAddScenario() {
    this.showScenarioInputField = true;
    this.showAddScenarioButton = false;
  }

  hideAddScenario() {
    this.scenarioText = null;
    this.showScenarioInputField = false;
    this.showAddScenarioButton = true;
  }

  isStepInputFieldVisible(scenarioId) {
    return this.currentScenario !== null && this.currentScenario.id == scenarioId;
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
    this.enableAddStepForScenario(scenario.id); scenario
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

  addStep(scenarioId) {
    const step = new Step();
    step.id = Util.key();
    step.description = this.stepText;
    const scenario = this.filterScenario(scenarioId);
    scenario.steps.push(step);
    this.stepText = null;
  }

  cancelAddStep() {
    this.currentScenario = null;
  }

}
