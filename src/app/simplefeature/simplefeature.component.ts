import { of, Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EditScenarioDialog } from './dialogs/edit.scenario.dialog';
import { Feature } from '../feature/model/feature';
import { Step } from '../feature/model/step';
import { Util } from '../common/Util';
import { Scenario } from '../feature/model/scenario';


@Component({
  selector: 'app-simplefeature',
  templateUrl: './simplefeature.component.html',
  styleUrls: ['./simplefeature.component.scss']
})
export class SimplefeatureComponent implements OnInit {

  currentScenarioId: string;
  scenarioTextReadonly: boolean;
  scenarioText = "";
  featureText = "";
  stepText = "";
  addFeatureVisible = false;
  showScenarioSection = false;
  showStepSection = false;

  featureObject: Feature;
  currentScenarioObject: Scenario;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    this.featureObject = new Feature();
    this.featureObject.id = Util.key();
    this.featureObject.description = "Calculator";

    const scenario1 = new Scenario();
    scenario1.id = Util.key();
    scenario1.description = "Add two numbers";

    const step11 = new Step();
    step11.id = Util.key();
    step11.description = "Given an instance of calculator";

    const step12 = new Step();
    step12.id = Util.key();
    step12.description = "When two numbers 10 and 25 are passed";


    const step13 = new Step();
    step13.id = Util.key();
    step13.description = "And addNumbers method is called";


    const step14 = new Step();
    step14.id = Util.key();
    step14.description = "Then it should return the sum of 35";

    const scenario2 = new Scenario();
    scenario2.id = Util.key();
    scenario2.description = "Multiply two numbers";

    const step21 = new Step();
    step21.id = Util.key();
    step21.description = "Given an instance of calculator";

    const step22 = new Step();
    step22.id = Util.key();
    step22.description = "When two numbers 10 and 25 are passed";

    const step23 = new Step();
    step23.id = Util.key();
    step23.description = "And multiplyNumbers is called";

    const step24 = new Step();
    step24.id = Util.key();
    step24.description = "Then it should return a product of 250";

    scenario1.steps.push(step11);
    scenario1.steps.push(step12);
    scenario1.steps.push(step13);
    scenario1.steps.push(step14);

    scenario2.steps.push(step21);
    scenario2.steps.push(step22);
    scenario2.steps.push(step23);
    scenario2.steps.push(step24);

    this.featureObject.scenarios.push(scenario1);
    this.featureObject.scenarios.push(scenario2);

  }

  showAddFeature() {
    this.addFeatureVisible = true;
  }

  addFeature() {
    // this.features.push(this.featureText);
    // this.featureText = "";
    // this.addFeatureVisible = false;
    // this.showScenarioSection = true;
  }

  doneDisabled() {
    return this.featureText.length == 0;
  }

  enableScenarioSection() {
    this.showStepSection = false;
    this.showScenarioSection = true;
  }

  addScenario() {
    this.currentScenarioObject = new Scenario();
    this.currentScenarioObject.id = Util.key();
    this.currentScenarioObject.description = this.scenarioText;
    this.featureObject.scenarios.push(this.currentScenarioObject);
    this.showScenarioSection = false;
    this.showStepSection = true;
    this.scenarioText = "";
  }

  addStep() {
    const step = new Step();
    step.id = Util.key();
    step.description = this.stepText;
    this.currentScenarioObject.steps.push(step);
    this.stepText = "";
  }

  countOfScenarios() {
    return this.featureObject.scenarios.length;
  }

  allScenarios(): Observable<Scenario[]> {
    return of(this.featureObject.scenarios.reverse());
  }

  // modifyScenario(id) {
  //   console.log('scenario id ', id);
  //   let dialogRef = this.dialog.open(EditScenarioDialog, {
  //     height: '300px',
  //     width: '600px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log('modified data', result);
  //   });
  // }

  updateScenario(id, $event){
    console.log('sccenario edited ',id,' new value ',$event.target.value);
    const scenario = this.filterScenario(id);
    scenario.description = $event.target.value;
    this.currentScenarioId = null;
  }

  deleteScenario(id){
    console.log('before ', this.featureObject.scenarios);
    const index = this.featureObject.scenarios.indexOf(this.filterScenario(id));
    this.featureObject.scenarios.splice(index,1);
    console.log('after ', this.featureObject.scenarios);
  }

  isEditable(id){
    return this.currentScenarioId == id;
  }

  enableEdit(id){
    this.currentScenarioId = id;
  }

  filterScenario(id:string) {
    return this.featureObject.scenarios.find(scenario => scenario.id === id);
  }
}
